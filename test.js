require('./index.js');
const assert = require('assert');

assert.equal(true, tru);
assert.equal(false, fals);

const coinFlip = flip;
assert(coinFlip === true || coinFlip === false);