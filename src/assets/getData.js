import axios from 'axios'

const filePath = '/data.json'

export default {
	getHomeList() {
		axios.get(filePath)
			.then(function (response) {
			console.log(response);
		}).catch(function (error) {
			console.log(error);
		});
}