<!-- Nice to have: showing the entire list when the user presses the arrow down key without typing anything. I tried to do it but I was unable. -->
<template>
	<div class="autocomplete">
		<!-- In the setup below, the prevent modifier ensures that the default behavior of the arrow keys is prevented, allowing your custom key event handling to take effect. -->
		<input v-model="search" 
			@input="onChange" 
			@focus="clearTxt"
			@keydown.esc.prevent="resetCmp"
			@keydown.down.prevent="onArrowDown" 
			@keydown.up.prevent="onArrowUp"
			@keydown.enter.prevent="selectItem" 
			@keydown.tab.prevent="selectItem" 
			type="text"
			ref="inputField"
		/>
		<!-- The mouseover event here is very important, because it allows
		to select the element on pressing enter or tab, even if this takes
		more than that -->
		<ul v-show="isOpen" 
			class="autocomplete-results" 
			ref="resultsList"
		>
			<!-- The result variable is only used to cycle through the feteched
			result and to populate the dom list. result is not needed to actually
			select an element because its index is used instead -->
			<li v-for="(result, i) in results" 
				:key="i" 
				@click="selectItem()" 
				@mouseover="selectedIndex = i"
				class="autocomplete-result" 
				:class="{ 'is-active': i === selectedIndex }">
				{{ result }}
			</li>
		</ul>
	</div>
	<div>
		<input class="nextEle" v-model="nextInputValue" ref="nextInputElement" type="text"
			placeholder="illustrating the focus" />
	</div>
</template>
<script>
export default {
	name: 'SearchAutocomplete',
	props: {
		items: {
			type: Array,
			required: false,
			default: () => [],
		},
	},
	data() {
		/* Here we initialize all the variables */
		return {
			search: '',		// initialize search results
			results: [],	// receive an array
			isOpen: false,	// start with the component closed
			/* index of the currently selected/highlighted item. When it is -1,
			no item is selected.*/
			selectedIndex: -1, 
			nextInputValue: '',
		};
	},
	mounted() {
		document.addEventListener('click', this.handleClickOutside);
	},
	beforeUnmount() {
		document.removeEventListener('click', this.handleClickOutside);
	},
	methods: {
		/* Helper to clear the search box */
		clearTxt(){
			this.search='';
		},
		/* Helper to clear and close the search box */
		resetCmp(){
			this.search='';
			this.isOpen = false;
		},
		
		/* If you only work in English, just use this function indeed instead of fiterResults */
		filterResultsUnaccented() {
			this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
		},

		/* Unicode version of filterResultsUnaccented. All the accented characters
		 such as à, á, â, ã, etc. will be treated like "a". Great for multilanguage
		  autocomplete. */
		filterResults(){
			const searchTerm = this.search.toLowerCase();
			this.results = this.items.filter(item => {
				/* The \u0300-\u036f Unicode range, primarily covers the diacritics used in the Latin script, which indeed includes a vast majority of European languages. The following normalizes the list of names. */
				const normalizedItem = item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
				/* This normalizes the search term in the autocomplete input field */
				const normalizedSearch = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
				// Check if the normalized item contains the normalized search term
				return normalizedItem.indexOf(normalizedSearch) > -1;
			});
		},
		/* The user typed a new letter in the input box (or deleted it) and the search
			suggestions should be adjusted accordingly. */
		onChange() {
			this.filterResults();
			// Check for non-empty input or non-empty results
			if (this.search.trim() !== '' || this.results.length > 0) {
				this.isOpen = true;
			} else {
				this.selectedIndex = -1;
				this.isOpen = false;
			}
		},
		/* Called when the user clicks or taps outside the component. */
		handleClickOutside(event) {
			if (!this.$el.contains(event.target)) {
				this.selectedIndex = -1;
				this.isOpen = false;
				/* Not good, because it would act even after a right choice. Clicking
				outside the component should not delete anything. */
				// this.clearTxt();
			}
		},
		/* Keyboard support, fired when the use uses arrow keys to navigate 
		through the list. This one addresses the arrow down key. */
		onArrowDown() {
			this.clearHoverSelection();
			if (this.selectedIndex < this.results.length - 1) {
				this.selectedIndex++;
				this.addHoverSelection();
				this.calculateScrollPosition();
			}
			
		},
		/* Addresses the arrow up key */
		onArrowUp() {
			if (this.selectedIndex > 0) {
				this.selectedIndex--;
				this.calculateScrollPosition();
			}
		},
		/* When Enter is pressed the currently selected index gets choosed. */
		onEnter() {
			this.search = this.results[this.selectedIndex];
			this.selectedIndex = -1;
			this.isOpen = false;
		},
		/* This method updates the search index producing the effect of highlighting an item from the list and update the search data. It focuses on the next item if the user moves to the next item or it selects the item if the item was selecte with a mouse click. This method does not address keyboard actions.*/
		selectItem() {
			if (this.selectedIndex !== -1) {
				this.search = this.results[this.selectedIndex];

				this.isOpen = false;
				// Focus on the next input element
				this.$nextTick(() => {
					const nextInput = this.$refs.nextInputElement;
					if(nextInput && nextInput.focus){
						nextInput.focus();
					}
				});
			}
		},
		/* This function and the next one seem to be necessary when the user begins to use
		the keyboard after the user previously used the mouse. Not sure if these methods
		are really needed. Comments are apprecied.*/
		clearHoverSelection() {
			this.$refs.resultsList.querySelectorAll('.autocomplete-result').forEach((element, index) => {
				if (index !== this.selectedIndex) {
					element.classList.remove('is-active');
				}
			});
		},

		addHoverSelection() {
			this.$refs.resultsList.querySelectorAll('.autocomplete-result').forEach((element, index) => {
				if (index === this.selectedIndex) {
					element.classList.add('is-active');
				}
			});
		},

		/* Keeps the selection of the item always vertically centered. */
		calculateScrollPosition() {
			const computedStyle = window.getComputedStyle(this.$refs.resultsList);
			const fontSize = parseFloat(computedStyle.fontSize);
			// the following line was commented because it doesn't work
			//const lineSpacing = parseFloat(computedStyle.lineHeight) || 1.5;
			const lineSpacing = 1.5;
			//console.log(computedStyle.lineHeight);
			const container = this.$refs.resultsList;
			const scrollPosition = (this.selectedIndex - 3) * lineSpacing * fontSize;
			container.scrollTop = scrollPosition;
		},
		
	},
};
</script>
<style>
.autocomplete {
	position: relative;
	display: inline-block;
}

/* This style applies to the entire list */
.autocomplete-results-old {
	list-style: none;
	text-align: left;
	padding: 0;
	width: 300px;
	max-height: 200px;
	overflow-y: scroll;
	/* On overflow, will add a vertical scrollbar automatically */
	overflow-x: auto;
	/* On overflow, will add a horizontal scrollbar automatically */
	border: 1px solid #ccc;
	/* A nice border around the suggestion list */
	margin: 0;
	border-radius: 5px;
}

/* The new version is more suitable for 7-words vertical alignment */
.autocomplete-results {
  list-style: none;
  text-align: left;
  padding: 0;
  width: 100%; /* Use the full width of the container */
  max-height: 10.5rem; /* Set max height to accommodate 7 items */
  line-height:1.5rem;
  overflow-y: auto;
  border: 1px solid #ccc;
  margin: 0;
  border-radius: 5px;
  display: block;
  font-size:1rem;
  box-sizing: content-box;
}

/* This style applies to each element of the list */
.autocomplete-result {
	/*padding: 4px 2px;*/
	/*font-family:Verdana, sans-serif;*/
	padding: .5rem,0;
	cursor: pointer;
}

/* When the mouse hovers and navigate through the list, each item will be highlighted
	with a nice green color.*/
.is-active{
	background-color: #4AAE98;
	color: white;
	width:100%;
}


.nextele {
	width: auto;
	margin-top:.2rem;
	padding: 0;
	box-sizing: content-box;
	/* To prevent the input from growing when padding is added */
}
</style>
