<template>
	<div id="app">
		<SearchAutocomplete :items="csvData"/>
	</div>
</template>

<script>
import SearchAutocomplete from './components/SearchAutocomplete.vue'
//import Papa from 'papaparse'
import axios from 'axios'

export default {
	name: 'App',
	components: {
		SearchAutocomplete
	},
	data() {
		return {
			csvData: []
		}
	},
	mounted() {
		this.fetchCSVData();
	},
	methods: {
		fetchCSVData() {
			axios.get('http://127.0.0.1:8000/api/process-csv/')
				.then(response => {
					/* The commented lines are just for debug purposes. */
					//console.log(typeof(response.data));
					// console.log(response.data);
					this.csvData = response.data;
					//console.log('Ok');
				})
				.catch(error=> {
					console.error('Error fetching CSV data:', error);
				});
		},
		
	}
}
</script>

