export let bootstrapCalled = false;
export let mountCalled = false;
export let timeouts = {
	bootstrap: {
		millis: 20,
		dieOnTimeout: false,
	},
};

export function bootstrap() {
	return new Promise(resolve => {
		bootstrapCalled = true;
		setTimeout(resolve, 30)
	});
}

export function mount() {
	return new Promise(resolve => {
		mountCalled = true;
		resolve();
	});
}

export function unmount() {
	return new Promise(resolve => {
		resolve();
	});
}
