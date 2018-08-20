export const fetchSchedule = () => {
	return fetch('/schedule')
		.then((res) => res.json())
		.then((res) => res.data);
};
