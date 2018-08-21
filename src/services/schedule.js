export const getSchedule = () => {
	return fetch('/schedule')
		.then((res) => res.json())
		.then((res) => res.data);
};

export const resetSchedule = () => {
	return fetch('/schedule/reset', {
		method: 'POST',
	})
		.then((res) => res.json())
		.then((res) => res.data);
};

export const setSchedule = (value) => {
	return fetch('/schedule', {
		method: 'POST',
		body: JSON.stringify({
			schedule: value,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((res) => res.data);
};
