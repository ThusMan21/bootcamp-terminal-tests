import assert from 'assert';
import greet from '../greet.js';

describe('greet', function() {
    it('should greet Mothusi correctly', function() {
        assert.equal(greet('Mothusi'), 'Hello, Mothusi');
    });
});
