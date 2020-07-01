var globalThis = require('globalthis')();

Object.defineProperty(globalThis, 'tru', {
	value: true,
	enumerable: true,
	writable: false,
});
