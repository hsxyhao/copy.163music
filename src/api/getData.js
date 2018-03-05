import axios from 'axios'

const filePath = 'static/data.json'

export default {
	getRecommendList() {
		axios.get(filePath)
			.then(data => data.data)
		.catch(function (error) {
			return error;
		});
	},
	getRecommendMusic() {
		axios.get(filePath)
			.then(data => data.data)
		.catch(function (error) {
			return error;
		});
	},
	getLastSongs() {
		axios.get(filePath)
			.then(data => data.data)
		.catch(function (error) {
			return error;
		});
	},
	getRecommendMv() {
		axios.get(filePath)
			.then(data => data.data)
		.catch(function (error) {
			return error;
		});
	},
	getRadio() {
		axios.get(filePath)
			.then(data => data.data)
		.catch(function (error) {
			return error;
		});
	}
}