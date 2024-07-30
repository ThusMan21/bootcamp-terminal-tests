import assert from 'assert';
import transportFee from '../transportFee.js';

describe('transportFee', function() {
    it('should return R20 for morning shift', function() {
        assert.strictEqual(transportFee('morning'), 'R20');
    });

    it('should return R10 for afternoon shift', function() {
        assert.strictEqual(transportFee('afternoon'), 'R10');
    });

    it('should return free for nightshift', function() {
        assert.strictEqual(transportFee('nightshift'), 'free');
    });

    it('should return Unknown shift for an unknown shift', function() {
        assert.strictEqual(transportFee('evening'), 'Unknown shift');
    });
});
