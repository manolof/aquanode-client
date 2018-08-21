export const getStatus = () => {
	return fetch('/status')
		.then((res) => res.json())
		.then((res) => res.data);
};
