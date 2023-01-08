import APIRequest from '../config/axios.config';

export default function getRandomChiste() {
	return APIRequest.get('/', {
		validateStatus: status => {
			return status < 500;
		},
	});
}