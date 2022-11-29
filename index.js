var globalThis = require('globalthis')();

Object.defineProperty(globalThis, 'tru', {
	value: true,
	enumerable: true,
	writable: false,
});

Object.defineProperty(globalThis, 'fals', {
	value: false,
	enumerable: true,
	writable: false,
});

Object.defineProperty(globalThis, 'flip', {
	get: () => Math.random() < 0.5,
	enumerable: false,
	configurable: false
});