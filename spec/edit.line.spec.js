/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const test = require('tape');
const L = require('leaflet');
require('../dist/leaflet.pm.min.js');

test('CREATE MARKER', (t) => {
    console.log(L);
    t.notEqual(1, undefined, '1 is defined');
    t.end();
});
