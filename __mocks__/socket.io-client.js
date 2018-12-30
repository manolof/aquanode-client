const EVENTS = {};

function on(event, func) {
	if (EVENTS[event]) {
		return EVENTS[event].push(func);
	}
	EVENTS[event] = [func];
}

function emit(event, ...args) {
	EVENTS[event].forEach(func => func(...args));
}

const socket = {
	on,
	emit,
};

function connect() {
	return socket;
}

export {
	connect,
	emit,
	on,
};
