"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevue_autocomplete_component_example"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SearchAutocomplete.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SearchAutocomplete.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SearchAutocomplete',\n  props: {\n    items: {\n      type: Array,\n      required: false,\n      default: () => []\n    }\n  },\n  data() {\n    /* Here we initialize all the variables */\n    return {\n      search: '',\n      // initialize search results\n      results: [],\n      // receive an array\n      isOpen: false,\n      // start with the component closed\n      selectedIndex: -1,\n      nextInputValue: ''\n    };\n  },\n  mounted() {\n    document.addEventListener('click', this.handleClickOutside);\n  },\n  beforeUnmount() {\n    document.removeEventListener('click', this.handleClickOutside);\n  },\n  methods: {\n    clearTxt() {\n      this.search = '';\n    },\n    resetCmp() {\n      this.search = '';\n      this.isOpen = false;\n    },\n    /* No longer needed */ /*setResult(result) {console.log(result);this.selectItem()},*/\n\n    filterResults() {\n      this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);\n    },\n    onChange() {\n      this.filterResults();\n      // Check for non-empty input or non-empty results\n      if (this.search.trim() !== '' || this.results.length > 0) {\n        this.isOpen = true;\n      } else {\n        this.selectedIndex = -1;\n        this.isOpen = false;\n      }\n    },\n    handleClickOutside(event) {\n      if (!this.$el.contains(event.target)) {\n        this.selectedIndex = -1;\n        this.isOpen = false;\n        /* Not good, because it would act even after a right choice. Clicking\r\n        outside the component should not delete anything. */\n        // this.clearTxt();\n      }\n    },\n    onArrowDown() {\n      this.clearHoverSelection();\n      if (this.selectedIndex < this.results.length) {\n        this.selectedIndex++;\n        this.addHoverSelection();\n        this.calculateScrollPosition();\n      }\n    },\n    onArrowUp() {\n      if (this.selectedIndex > 0) {\n        this.selectedIndex--;\n        this.calculateScrollPosition();\n      }\n    },\n    onEnter() {\n      this.search = this.results[this.selectedIndex];\n      this.selectedIndex = -1;\n      this.isOpen = false;\n    },\n    selectItem() {\n      if (this.selectedIndex !== -1) {\n        this.search = this.results[this.selectedIndex];\n        this.isOpen = false;\n        // Focus on the next input element\n        this.$nextTick(() => {\n          const nextInput = this.$refs.nextInputElement;\n          if (nextInput && nextInput.focus) {\n            nextInput.focus();\n          }\n        });\n      }\n    },\n    clearHoverSelection() {\n      this.$refs.resultsList.querySelectorAll('.autocomplete-result').forEach((element, index) => {\n        if (index !== this.selectedIndex) {\n          element.classList.remove('is-active');\n        }\n      });\n    },\n    addHoverSelection() {\n      this.$refs.resultsList.querySelectorAll('.autocomplete-result').forEach((element, index) => {\n        if (index === this.selectedIndex) {\n          element.classList.add('is-active');\n        }\n      });\n    },\n    calculateScrollPosition() {\n      const lineSpacing = 1.5;\n      const container = this.$refs.resultsList;\n      const scrollPosition = (this.selectedIndex - 3) * lineSpacing * 16;\n      container.scrollTop = scrollPosition;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1NlYXJjaEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6IjtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWF1dG9jb21wbGV0ZS1jb21wb25lbnQtZXhhbXBsZS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEF1dG9jb21wbGV0ZS52dWU/NDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImF1dG9jb21wbGV0ZVwiPlxyXG5cdFx0PCEtLSBJbiB0aGUgc2V0dXAgYmVsb3csIHRoZSBwcmV2ZW50IG1vZGlmaWVyIGVuc3VyZXMgdGhhdCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgYXJyb3cga2V5cyBpcyBwcmV2ZW50ZWQsIGFsbG93aW5nIHlvdXIgY3VzdG9tIGtleSBldmVudCBoYW5kbGluZyB0byB0YWtlIGVmZmVjdC4gLS0+XHJcblx0XHQ8aW5wdXQgdi1tb2RlbD1cInNlYXJjaFwiIFxyXG5cdFx0XHRAaW5wdXQ9XCJvbkNoYW5nZVwiIFxyXG5cdFx0XHRAZm9jdXM9XCJjbGVhclR4dFwiXHJcblx0XHRcdEBrZXlkb3duLmVzYy5wcmV2ZW50PVwicmVzZXRDbXBcIlxyXG5cdFx0XHRAa2V5ZG93bi5kb3duLnByZXZlbnQ9XCJvbkFycm93RG93blwiIFxyXG5cdFx0XHRAa2V5ZG93bi51cC5wcmV2ZW50PVwib25BcnJvd1VwXCJcclxuXHRcdFx0QGtleWRvd24uZW50ZXIucHJldmVudD1cInNlbGVjdEl0ZW1cIiBcclxuXHRcdFx0QGtleWRvd24udGFiLnByZXZlbnQ9XCJzZWxlY3RJdGVtXCIgXHJcblx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0cmVmPVwiaW5wdXRGaWVsZFwiXHJcblx0XHQvPlxyXG5cdFx0PCEtLSBUaGUgbW91c2VvdmVyIGV2ZW50IGhlcmUgaXMgdmVyeSBpbXBvcnRhbnQsIGJlY2F1c2UgaXQgYWxsb3dzXHJcblx0XHR0byBzZWxlY3QgdGhlIGVsZW1lbnQgb24gcHJlc3NpbmcgZW50ZXIgb3IgdGFiLCBldmVuIGlmIHRoaXMgdGFrZXNcclxuXHRcdG1vcmUgdGhhbiB0aGF0IC0tPlxyXG5cdFx0PHVsIHYtc2hvdz1cImlzT3BlblwiIFxyXG5cdFx0XHRjbGFzcz1cImF1dG9jb21wbGV0ZS1yZXN1bHRzXCIgXHJcblx0XHRcdHJlZj1cInJlc3VsdHNMaXN0XCJcclxuXHRcdD5cclxuXHRcdFx0PCEtLSBUaGUgcmVzdWx0IHZhcmlhYmxlIGlzIG9ubHkgdXNlZCB0byBjeWNsZSB0aHJvdWdoIHRoZSBmZXRlY2hlZFxyXG5cdFx0XHRyZXN1bHQgYW5kIHRvIHBvcHVsYXRlIHRoZSBkb20gbGlzdC4gcmVzdWx0IGlzIG5vdCBuZWVkZWQgdG8gYWN0dWFsbHlcclxuXHRcdFx0c2VsZWN0IGFuIGVsZW1lbnQgYmVjYXVzZSBpdHMgaW5kZXggaXMgdXNlZCBpbnN0ZWFkIC0tPlxyXG5cdFx0XHQ8bGkgdi1mb3I9XCIocmVzdWx0LCBpKSBpbiByZXN1bHRzXCIgXHJcblx0XHRcdFx0OmtleT1cImlcIiBcclxuXHRcdFx0XHRAY2xpY2s9XCJzZWxlY3RJdGVtKClcIiBcclxuXHRcdFx0XHRAbW91c2VvdmVyPVwic2VsZWN0ZWRJbmRleCA9IGlcIlxyXG5cdFx0XHRcdGNsYXNzPVwiYXV0b2NvbXBsZXRlLXJlc3VsdFwiIFxyXG5cdFx0XHRcdDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGkgPT09IHNlbGVjdGVkSW5kZXggfVwiPlxyXG5cdFx0XHRcdHt7IHJlc3VsdCB9fVxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0PC91bD5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2PlxyXG5cdFx0PGlucHV0IGNsYXNzPVwibmV4dEVsZVwiIHYtbW9kZWw9XCJuZXh0SW5wdXRWYWx1ZVwiIHJlZj1cIm5leHRJbnB1dEVsZW1lbnRcIiB0eXBlPVwidGV4dFwiXHJcblx0XHRcdHBsYWNlaG9sZGVyPVwidGhpcyBkb2VzIG5vdGhpbmcgaXQganVzdCBpbGx1c3RyYXRlcyB0aGUgZm9jdXNcIiAvPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ1NlYXJjaEF1dG9jb21wbGV0ZScsXHJcblx0cHJvcHM6IHtcclxuXHRcdGl0ZW1zOiB7XHJcblx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXHJcblx0XHRcdGRlZmF1bHQ6ICgpID0+IFtdLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHQvKiBIZXJlIHdlIGluaXRpYWxpemUgYWxsIHRoZSB2YXJpYWJsZXMgKi9cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHNlYXJjaDogJycsXHRcdC8vIGluaXRpYWxpemUgc2VhcmNoIHJlc3VsdHNcclxuXHRcdFx0cmVzdWx0czogW10sXHQvLyByZWNlaXZlIGFuIGFycmF5XHJcblx0XHRcdGlzT3BlbjogZmFsc2UsXHQvLyBzdGFydCB3aXRoIHRoZSBjb21wb25lbnQgY2xvc2VkXHJcblx0XHRcdHNlbGVjdGVkSW5kZXg6IC0xLFxyXG5cdFx0XHRuZXh0SW5wdXRWYWx1ZTogJycsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG5cdH0sXHJcblx0YmVmb3JlVW5tb3VudCgpIHtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Y2xlYXJUeHQoKXtcclxuXHRcdFx0dGhpcy5zZWFyY2g9Jyc7XHJcblx0XHR9LFxyXG5cdFx0cmVzZXRDbXAoKXtcclxuXHRcdFx0dGhpcy5zZWFyY2g9Jyc7XHJcblx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0LyogTm8gbG9uZ2VyIG5lZWRlZCAqLy8qc2V0UmVzdWx0KHJlc3VsdCkge2NvbnNvbGUubG9nKHJlc3VsdCk7dGhpcy5zZWxlY3RJdGVtKCl9LCovXHJcblxyXG5cdFx0ZmlsdGVyUmVzdWx0cygpIHtcclxuXHRcdFx0dGhpcy5yZXN1bHRzID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKSA+IC0xKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0b25DaGFuZ2UoKSB7XHJcblx0XHRcdHRoaXMuZmlsdGVyUmVzdWx0cygpO1xyXG5cdFx0XHQvLyBDaGVjayBmb3Igbm9uLWVtcHR5IGlucHV0IG9yIG5vbi1lbXB0eSByZXN1bHRzXHJcblx0XHRcdGlmICh0aGlzLnNlYXJjaC50cmltKCkgIT09ICcnIHx8IHRoaXMucmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0aGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XHJcblx0XHRcdGlmICghdGhpcy4kZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0LyogTm90IGdvb2QsIGJlY2F1c2UgaXQgd291bGQgYWN0IGV2ZW4gYWZ0ZXIgYSByaWdodCBjaG9pY2UuIENsaWNraW5nXHJcblx0XHRcdFx0b3V0c2lkZSB0aGUgY29tcG9uZW50IHNob3VsZCBub3QgZGVsZXRlIGFueXRoaW5nLiAqL1xyXG5cdFx0XHRcdC8vIHRoaXMuY2xlYXJUeHQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQXJyb3dEb3duKCkge1xyXG5cdFx0XHR0aGlzLmNsZWFySG92ZXJTZWxlY3Rpb24oKTtcclxuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMucmVzdWx0cy5sZW5ndGgpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXgrKztcclxuXHRcdFx0XHR0aGlzLmFkZEhvdmVyU2VsZWN0aW9uKCk7XHJcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVTY3JvbGxQb3NpdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHJcblx0XHRvbkFycm93VXAoKSB7XHJcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAwKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEluZGV4LS07XHJcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVTY3JvbGxQb3NpdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG9uRW50ZXIoKSB7XHJcblx0XHRcdHRoaXMuc2VhcmNoID0gdGhpcy5yZXN1bHRzW3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHR0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZWxlY3RJdGVtKCkge1xyXG5cdFx0XHRpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdHRoaXMuc2VhcmNoID0gdGhpcy5yZXN1bHRzW3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcblxyXG5cdFx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0Ly8gRm9jdXMgb24gdGhlIG5leHQgaW5wdXQgZWxlbWVudFxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5leHRJbnB1dCA9IHRoaXMuJHJlZnMubmV4dElucHV0RWxlbWVudDtcclxuXHRcdFx0XHRcdGlmKG5leHRJbnB1dCAmJiBuZXh0SW5wdXQuZm9jdXMpe1xyXG5cdFx0XHRcdFx0XHRuZXh0SW5wdXQuZm9jdXMoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Y2xlYXJIb3ZlclNlbGVjdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kcmVmcy5yZXN1bHRzTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0b2NvbXBsZXRlLXJlc3VsdCcpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0aWYgKGluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YWRkSG92ZXJTZWxlY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJHJlZnMucmVzdWx0c0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLmF1dG9jb21wbGV0ZS1yZXN1bHQnKS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XHJcblx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNhbGN1bGF0ZVNjcm9sbFBvc2l0aW9uKCkge1xyXG5cdFx0XHRjb25zdCBsaW5lU3BhY2luZyA9IDEuNTtcclxuXHJcblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuJHJlZnMucmVzdWx0c0xpc3Q7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBzY3JvbGxQb3NpdGlvbiA9ICh0aGlzLnNlbGVjdGVkSW5kZXggLSAzKSAqIGxpbmVTcGFjaW5nICogMTY7XHJcblxyXG5cdFx0XHRjb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zaXRpb247XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuLmF1dG9jb21wbGV0ZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogVGhpcyBzdHlsZSBhcHBsaWVzIHRvIHRoZSBlbnRpcmUgbGlzdCAqL1xyXG4uYXV0b2NvbXBsZXRlLXJlc3VsdHMtb2xkIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0cGFkZGluZzogMDtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0bWF4LWhlaWdodDogMjAwcHg7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdC8qIE9uIG92ZXJmbG93LCB3aWxsIGFkZCBhIHZlcnRpY2FsIHNjcm9sbGJhciBhdXRvbWF0aWNhbGx5ICovXHJcblx0b3ZlcmZsb3cteDogYXV0bztcclxuXHQvKiBPbiBvdmVyZmxvdywgd2lsbCBhZGQgYSBob3Jpem9udGFsIHNjcm9sbGJhciBhdXRvbWF0aWNhbGx5ICovXHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHQvKiBBIG5pY2UgYm9yZGVyIGFyb3VuZCB0aGUgc3VnZ2VzdGlvbiBsaXN0ICovXHJcblx0bWFyZ2luOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmF1dG9jb21wbGV0ZS1yZXN1bHRzIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTsgLyogVXNlIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBjb250YWluZXIgKi9cclxuICBtYXgtaGVpZ2h0OiAxMHJlbTsgLyogU2V0IHRoZSBtYXhpbXVtIGhlaWdodCB0byBhY2NvbW1vZGF0ZSA3IGl0ZW1zIGJhc2VkIG9uIHlvdXIgaXRlbSBoZWlnaHQgKi9cclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogVGhpcyBzdHlsZSBhcHBsaWVzIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgbGlzdCAqL1xyXG4uYXV0b2NvbXBsZXRlLXJlc3VsdCB7XHJcblx0LypwYWRkaW5nOiA0cHggMnB4OyovXHJcblx0Lypmb250LWZhbWlseTpWZXJkYW5hLCBzYW5zLXNlcmlmOyovXHJcblx0cGFkZGluZzogMXJlbSwwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogV2hlbiB0aGUgbW91c2UgaG92ZXJzIGFuZCBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBsaXN0LCBlYWNoIGl0ZW0gd2lsbCBiZSBoaWdobGlnaHRlZFxyXG5cdHdpdGggYSBuaWNlIGdyZWVuIGNvbG9yLiovXHJcbi5pcy1hY3RpdmV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzRBQUU5ODtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4ubmV4dGVsZSB7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0bWF4LXdpZHRoOiA4MCU7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cdC8qIFRvIHByZXZlbnQgdGhlIGlucHV0IGZyb20gZ3Jvd2luZyB3aGVuIHBhZGRpbmcgaXMgYWRkZWQgKi9cclxufVxyXG48L3N0eWxlPlxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SearchAutocomplete.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SearchAutocomplete.vue?vue&type=template&id=529fd040":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SearchAutocomplete.vue?vue&type=template&id=529fd040 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"autocomplete\"\n};\nconst _hoisted_2 = {\n  class: \"autocomplete-results\",\n  ref: \"resultsList\"\n};\nconst _hoisted_3 = [\"onMouseover\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" In the setup below, the prevent modifier ensures that the default behavior of the arrow keys is prevented, allowing your custom key event handling to take effect. \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.search = $event),\n    onInput: _cache[1] || (_cache[1] = (...args) => $options.onChange && $options.onChange(...args)),\n    onFocus: _cache[2] || (_cache[2] = (...args) => $options.clearTxt && $options.clearTxt(...args)),\n    onKeydown: [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.resetCmp && $options.resetCmp(...args), [\"prevent\"]), [\"esc\"])), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.onArrowDown && $options.onArrowDown(...args), [\"prevent\"]), [\"down\"])), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.onArrowUp && $options.onArrowUp(...args), [\"prevent\"]), [\"up\"])), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.selectItem && $options.selectItem(...args), [\"prevent\"]), [\"enter\"])), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.selectItem && $options.selectItem(...args), [\"prevent\"]), [\"tab\"]))],\n    type: \"text\",\n    ref: \"inputField\"\n  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.search]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" The mouseover event here is very important, because it allows\\r\\n\\t\\tto select the element on pressing enter or tab, even if this takes\\r\\n\\t\\tmore than that \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" The result variable is only used to cycle through the feteched\\r\\n\\t\\t\\tresult and to populate the dom list. result is not needed to actually\\r\\n\\t\\t\\tselect an element because its index is used instead \"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.results, (result, i) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: i,\n      onClick: _cache[8] || (_cache[8] = $event => $options.selectItem()),\n      onMouseover: $event => $data.selectedIndex = i,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"autocomplete-result\", {\n        'is-active': i === $data.selectedIndex\n      }])\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(result), 43 /* TEXT, CLASS, PROPS, NEED_HYDRATION */, _hoisted_3);\n  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isOpen]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    class: \"nextEle\",\n    \"onUpdate:modelValue\": _cache[9] || (_cache[9] = $event => $data.nextInputValue = $event),\n    ref: \"nextInputElement\",\n    type: \"text\",\n    placeholder: \"this does nothing it just illustrates the focus\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.nextInputValue]])])], 64 /* STABLE_FRAGMENT */);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay1wbHVnaW4tdnVldGlmeS9kaXN0L3NjcmlwdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwLnVzZVswXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1NlYXJjaEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTI5ZmQwNDAiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQUE7O0FBaUJBO0FBQ0E7Ozs7QUFsQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFUQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBYkE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWF1dG9jb21wbGV0ZS1jb21wb25lbnQtZXhhbXBsZS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEF1dG9jb21wbGV0ZS52dWU/NDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImF1dG9jb21wbGV0ZVwiPlxyXG5cdFx0PCEtLSBJbiB0aGUgc2V0dXAgYmVsb3csIHRoZSBwcmV2ZW50IG1vZGlmaWVyIGVuc3VyZXMgdGhhdCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgYXJyb3cga2V5cyBpcyBwcmV2ZW50ZWQsIGFsbG93aW5nIHlvdXIgY3VzdG9tIGtleSBldmVudCBoYW5kbGluZyB0byB0YWtlIGVmZmVjdC4gLS0+XHJcblx0XHQ8aW5wdXQgdi1tb2RlbD1cInNlYXJjaFwiIFxyXG5cdFx0XHRAaW5wdXQ9XCJvbkNoYW5nZVwiIFxyXG5cdFx0XHRAZm9jdXM9XCJjbGVhclR4dFwiXHJcblx0XHRcdEBrZXlkb3duLmVzYy5wcmV2ZW50PVwicmVzZXRDbXBcIlxyXG5cdFx0XHRAa2V5ZG93bi5kb3duLnByZXZlbnQ9XCJvbkFycm93RG93blwiIFxyXG5cdFx0XHRAa2V5ZG93bi51cC5wcmV2ZW50PVwib25BcnJvd1VwXCJcclxuXHRcdFx0QGtleWRvd24uZW50ZXIucHJldmVudD1cInNlbGVjdEl0ZW1cIiBcclxuXHRcdFx0QGtleWRvd24udGFiLnByZXZlbnQ9XCJzZWxlY3RJdGVtXCIgXHJcblx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0cmVmPVwiaW5wdXRGaWVsZFwiXHJcblx0XHQvPlxyXG5cdFx0PCEtLSBUaGUgbW91c2VvdmVyIGV2ZW50IGhlcmUgaXMgdmVyeSBpbXBvcnRhbnQsIGJlY2F1c2UgaXQgYWxsb3dzXHJcblx0XHR0byBzZWxlY3QgdGhlIGVsZW1lbnQgb24gcHJlc3NpbmcgZW50ZXIgb3IgdGFiLCBldmVuIGlmIHRoaXMgdGFrZXNcclxuXHRcdG1vcmUgdGhhbiB0aGF0IC0tPlxyXG5cdFx0PHVsIHYtc2hvdz1cImlzT3BlblwiIFxyXG5cdFx0XHRjbGFzcz1cImF1dG9jb21wbGV0ZS1yZXN1bHRzXCIgXHJcblx0XHRcdHJlZj1cInJlc3VsdHNMaXN0XCJcclxuXHRcdD5cclxuXHRcdFx0PCEtLSBUaGUgcmVzdWx0IHZhcmlhYmxlIGlzIG9ubHkgdXNlZCB0byBjeWNsZSB0aHJvdWdoIHRoZSBmZXRlY2hlZFxyXG5cdFx0XHRyZXN1bHQgYW5kIHRvIHBvcHVsYXRlIHRoZSBkb20gbGlzdC4gcmVzdWx0IGlzIG5vdCBuZWVkZWQgdG8gYWN0dWFsbHlcclxuXHRcdFx0c2VsZWN0IGFuIGVsZW1lbnQgYmVjYXVzZSBpdHMgaW5kZXggaXMgdXNlZCBpbnN0ZWFkIC0tPlxyXG5cdFx0XHQ8bGkgdi1mb3I9XCIocmVzdWx0LCBpKSBpbiByZXN1bHRzXCIgXHJcblx0XHRcdFx0OmtleT1cImlcIiBcclxuXHRcdFx0XHRAY2xpY2s9XCJzZWxlY3RJdGVtKClcIiBcclxuXHRcdFx0XHRAbW91c2VvdmVyPVwic2VsZWN0ZWRJbmRleCA9IGlcIlxyXG5cdFx0XHRcdGNsYXNzPVwiYXV0b2NvbXBsZXRlLXJlc3VsdFwiIFxyXG5cdFx0XHRcdDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGkgPT09IHNlbGVjdGVkSW5kZXggfVwiPlxyXG5cdFx0XHRcdHt7IHJlc3VsdCB9fVxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0PC91bD5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2PlxyXG5cdFx0PGlucHV0IGNsYXNzPVwibmV4dEVsZVwiIHYtbW9kZWw9XCJuZXh0SW5wdXRWYWx1ZVwiIHJlZj1cIm5leHRJbnB1dEVsZW1lbnRcIiB0eXBlPVwidGV4dFwiXHJcblx0XHRcdHBsYWNlaG9sZGVyPVwidGhpcyBkb2VzIG5vdGhpbmcgaXQganVzdCBpbGx1c3RyYXRlcyB0aGUgZm9jdXNcIiAvPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ1NlYXJjaEF1dG9jb21wbGV0ZScsXHJcblx0cHJvcHM6IHtcclxuXHRcdGl0ZW1zOiB7XHJcblx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXHJcblx0XHRcdGRlZmF1bHQ6ICgpID0+IFtdLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHQvKiBIZXJlIHdlIGluaXRpYWxpemUgYWxsIHRoZSB2YXJpYWJsZXMgKi9cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHNlYXJjaDogJycsXHRcdC8vIGluaXRpYWxpemUgc2VhcmNoIHJlc3VsdHNcclxuXHRcdFx0cmVzdWx0czogW10sXHQvLyByZWNlaXZlIGFuIGFycmF5XHJcblx0XHRcdGlzT3BlbjogZmFsc2UsXHQvLyBzdGFydCB3aXRoIHRoZSBjb21wb25lbnQgY2xvc2VkXHJcblx0XHRcdHNlbGVjdGVkSW5kZXg6IC0xLFxyXG5cdFx0XHRuZXh0SW5wdXRWYWx1ZTogJycsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG5cdH0sXHJcblx0YmVmb3JlVW5tb3VudCgpIHtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Y2xlYXJUeHQoKXtcclxuXHRcdFx0dGhpcy5zZWFyY2g9Jyc7XHJcblx0XHR9LFxyXG5cdFx0cmVzZXRDbXAoKXtcclxuXHRcdFx0dGhpcy5zZWFyY2g9Jyc7XHJcblx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0LyogTm8gbG9uZ2VyIG5lZWRlZCAqLy8qc2V0UmVzdWx0KHJlc3VsdCkge2NvbnNvbGUubG9nKHJlc3VsdCk7dGhpcy5zZWxlY3RJdGVtKCl9LCovXHJcblxyXG5cdFx0ZmlsdGVyUmVzdWx0cygpIHtcclxuXHRcdFx0dGhpcy5yZXN1bHRzID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKSA+IC0xKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0b25DaGFuZ2UoKSB7XHJcblx0XHRcdHRoaXMuZmlsdGVyUmVzdWx0cygpO1xyXG5cdFx0XHQvLyBDaGVjayBmb3Igbm9uLWVtcHR5IGlucHV0IG9yIG5vbi1lbXB0eSByZXN1bHRzXHJcblx0XHRcdGlmICh0aGlzLnNlYXJjaC50cmltKCkgIT09ICcnIHx8IHRoaXMucmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0aGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XHJcblx0XHRcdGlmICghdGhpcy4kZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0LyogTm90IGdvb2QsIGJlY2F1c2UgaXQgd291bGQgYWN0IGV2ZW4gYWZ0ZXIgYSByaWdodCBjaG9pY2UuIENsaWNraW5nXHJcblx0XHRcdFx0b3V0c2lkZSB0aGUgY29tcG9uZW50IHNob3VsZCBub3QgZGVsZXRlIGFueXRoaW5nLiAqL1xyXG5cdFx0XHRcdC8vIHRoaXMuY2xlYXJUeHQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQXJyb3dEb3duKCkge1xyXG5cdFx0XHR0aGlzLmNsZWFySG92ZXJTZWxlY3Rpb24oKTtcclxuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMucmVzdWx0cy5sZW5ndGgpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXgrKztcclxuXHRcdFx0XHR0aGlzLmFkZEhvdmVyU2VsZWN0aW9uKCk7XHJcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVTY3JvbGxQb3NpdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHJcblx0XHRvbkFycm93VXAoKSB7XHJcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAwKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEluZGV4LS07XHJcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVTY3JvbGxQb3NpdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG9uRW50ZXIoKSB7XHJcblx0XHRcdHRoaXMuc2VhcmNoID0gdGhpcy5yZXN1bHRzW3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHR0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZWxlY3RJdGVtKCkge1xyXG5cdFx0XHRpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdHRoaXMuc2VhcmNoID0gdGhpcy5yZXN1bHRzW3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcblxyXG5cdFx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0Ly8gRm9jdXMgb24gdGhlIG5leHQgaW5wdXQgZWxlbWVudFxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5leHRJbnB1dCA9IHRoaXMuJHJlZnMubmV4dElucHV0RWxlbWVudDtcclxuXHRcdFx0XHRcdGlmKG5leHRJbnB1dCAmJiBuZXh0SW5wdXQuZm9jdXMpe1xyXG5cdFx0XHRcdFx0XHRuZXh0SW5wdXQuZm9jdXMoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Y2xlYXJIb3ZlclNlbGVjdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kcmVmcy5yZXN1bHRzTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0b2NvbXBsZXRlLXJlc3VsdCcpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0aWYgKGluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YWRkSG92ZXJTZWxlY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJHJlZnMucmVzdWx0c0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLmF1dG9jb21wbGV0ZS1yZXN1bHQnKS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XHJcblx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNhbGN1bGF0ZVNjcm9sbFBvc2l0aW9uKCkge1xyXG5cdFx0XHRjb25zdCBsaW5lU3BhY2luZyA9IDEuNTtcclxuXHJcblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuJHJlZnMucmVzdWx0c0xpc3Q7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBzY3JvbGxQb3NpdGlvbiA9ICh0aGlzLnNlbGVjdGVkSW5kZXggLSAzKSAqIGxpbmVTcGFjaW5nICogMTY7XHJcblxyXG5cdFx0XHRjb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zaXRpb247XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuLmF1dG9jb21wbGV0ZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogVGhpcyBzdHlsZSBhcHBsaWVzIHRvIHRoZSBlbnRpcmUgbGlzdCAqL1xyXG4uYXV0b2NvbXBsZXRlLXJlc3VsdHMtb2xkIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0cGFkZGluZzogMDtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0bWF4LWhlaWdodDogMjAwcHg7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdC8qIE9uIG92ZXJmbG93LCB3aWxsIGFkZCBhIHZlcnRpY2FsIHNjcm9sbGJhciBhdXRvbWF0aWNhbGx5ICovXHJcblx0b3ZlcmZsb3cteDogYXV0bztcclxuXHQvKiBPbiBvdmVyZmxvdywgd2lsbCBhZGQgYSBob3Jpem9udGFsIHNjcm9sbGJhciBhdXRvbWF0aWNhbGx5ICovXHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHQvKiBBIG5pY2UgYm9yZGVyIGFyb3VuZCB0aGUgc3VnZ2VzdGlvbiBsaXN0ICovXHJcblx0bWFyZ2luOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmF1dG9jb21wbGV0ZS1yZXN1bHRzIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTsgLyogVXNlIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBjb250YWluZXIgKi9cclxuICBtYXgtaGVpZ2h0OiAxMHJlbTsgLyogU2V0IHRoZSBtYXhpbXVtIGhlaWdodCB0byBhY2NvbW1vZGF0ZSA3IGl0ZW1zIGJhc2VkIG9uIHlvdXIgaXRlbSBoZWlnaHQgKi9cclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogVGhpcyBzdHlsZSBhcHBsaWVzIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgbGlzdCAqL1xyXG4uYXV0b2NvbXBsZXRlLXJlc3VsdCB7XHJcblx0LypwYWRkaW5nOiA0cHggMnB4OyovXHJcblx0Lypmb250LWZhbWlseTpWZXJkYW5hLCBzYW5zLXNlcmlmOyovXHJcblx0cGFkZGluZzogMXJlbSwwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogV2hlbiB0aGUgbW91c2UgaG92ZXJzIGFuZCBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBsaXN0LCBlYWNoIGl0ZW0gd2lsbCBiZSBoaWdobGlnaHRlZFxyXG5cdHdpdGggYSBuaWNlIGdyZWVuIGNvbG9yLiovXHJcbi5pcy1hY3RpdmV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzRBQUU5ODtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4ubmV4dGVsZSB7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0bWF4LXdpZHRoOiA4MCU7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cdC8qIFRvIHByZXZlbnQgdGhlIGlucHV0IGZyb20gZ3Jvd2luZyB3aGVuIHBhZGRpbmcgaXMgYWRkZWQgKi9cclxufVxyXG48L3N0eWxlPlxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SearchAutocomplete.vue?vue&type=template&id=529fd040\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c5cf694e7117dce9"; }
/******/ }();
/******/ 
/******/ }
);