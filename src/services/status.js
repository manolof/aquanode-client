export const fetchStatus = () => {
	return fetch('/status')
		.then((res) => res.json())
		.then((res) => res.data);
};
