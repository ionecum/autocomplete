<template>
	<div class="autocomplete">
		<input
			v-model="search"
			@input="onChange"
			@keydown.down.prevent="onArrowDown"
			@keydown.up.prevent="onArrowUp"
			@keydown.enter.prevent="selectItem"
			@keydown.tab.prevent="selectItem"
			type="text"
		/>
		<ul
			v-show="isOpen"
			class="autocomplete-results"
			ref="resultsList"
			@mouseleave="selectedIndex = -1"
		>
			<li 
				v-for="(result, i) in results"
				:key="i"
				@click="setResult(result)"
				@mouseover="selectedIndex = i; inputMethod='mouse'"
				:class="{ 'highlighted': i === selectedIndex }"
				class="autocomplete-result"
			>
				{{ result }}
			</li>
		</ul>
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
			return {
				search: '',		// initialize search results
				results: [],	// receive an array
				isOpen: false,	// start with the component closed
				selectedIndex: -1, // at the beginning, don't select anything
				inputMethod: 'keyboard'
			};
		},
		mounted() {
			
			document.addEventListener('click', this.handleClickOutside);
		},
		unmounted() {
			document.removeEventListener('click', this.handleClickOutside);
		},
		methods: {
			setResult(result) {
				this.search = result;
				this.isOpen = false;
			},
			
			filterResults() {
				this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
			},
			
			onChange() {
				this.filterResults();
				this.isOpen = this.search !== ''; 
			},
			
			handleClickOutside(event) {
				if (!this.$el.contains(event.target)) {
					this.isOpen = false;
				}
			},
			
			onArrowDown(){
				if(this.inputMethod === 'mouse'){
					this.selectedIndex = -1;
					this.inputMethod = 'keyboard';
				}
				if(this.selectedIndex < this.results.length -1){
					this.selectedIndex++;
				}
			},
			
			onArrowUp(){
				if(this.inputMethod === 'mouse'){
					this.selectedIndex = -1;
					this.inputMethod = 'keyboard';
				}
				if(this.selectedIndex > 0){
					this.selectedIndex--;
				}
			},
			
			selectItem() {
				if(this.selectedIndex !== -1){
					this.search = this.results[this.selectedIndex];
					this.isOpen = false;
				}
			}
		},
	};
</script>
<style>
	.autocomplete {
		position: relative;
	}

	/* This style applies to the entire list */
	.autocomplete-results {
		list-style: none;
		text-align: left;
		padding: 0;
		width:300px;
		max-height:200px;
		overflow-y:auto; /* On overflow, will add a vertical scrollbar automatically */
		overflow-x:auto; /* On overflow, will add a horizontal scrollbar automatically */
		border: 1px solid #ccc; /* A nice border around the suggestion list */
		margin:0;
		border-radius:5px;
	}

	/* This style applies to each element of the list */
	.autocomplete-result {
		padding: 4px 2px;
		cursor: pointer;
		width:100%;
	}
	
	/* When the mouse hovers and navigate through the list, each item will be highlighted
	with a nice green color.*/
	.autocomplete-result:hover {
		background-color: #4AAE98;
		color: white;
	}

	/* This will apply when the user navigates through the suggestion list using a keyboard */
	.highlighted {
		background-color: #f2f2f2;
	}
</style>

<!-- To Absolutely Do:
1. Even if the keyboard and mouse events are handled differently, but buth can trigger the same changes in the dom. In the following code, when the user just used the keyboard to navigate throught suggestions and he decides to use the mouse, the keyboard event is correctly reset. But the inverse don't work. When the user is using the mouse and suddently he decide to continue his navegation with the keyboard, the mouse highlight will not reset, because the mouse pointer is still over the element and the event will not stop triggering. The best solution is that both the keyboard and the mouse affect the same dom element without being forced to code acrobatic synchronizations. 

2. When the user uses the keyboard to navigate through the suggestion
list, and he goes down the height of the component, his selection will no longer be visible, and the user's selection should always be in the vertical middle of the list. 
-->