var globalThis = require('globalthis')();

Object.defineProperty(globalThis, 'tru', {
	value: true,
	enumerable: true,
	writable: false,
});

Object.defineProperty(globalThis, 'fals', {
	value: true,
	enumerable: true,
	writable: false,
});
