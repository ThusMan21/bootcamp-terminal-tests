
import assert from 'assert';
import countAllPaarl from '../countAllPaarl.js';

describe('countAllPaarl', function() {
    it('should count registration numbers from Paarl', function() {
        assert.strictEqual(countAllPaarl('CA 123, CJ 456, CY 789, CJ 321'), 2);
    });

    it('should handle no Paarl registration numbers gracefully', function() {
        assert.strictEqual(countAllPaarl('CA 123, CY 789'), 0);
    });

    it('should handle empty string gracefully', function() {
        assert.strictEqual(countAllPaarl(''), 0);
    });

    it('should handle null input gracefully', function() {
        assert.strictEqual(countAllPaarl(null), 0);
    });

    it('should handle undefined input gracefully', function() {
        assert.strictEqual(countAllPaarl(undefined), 0);
    });

    it('should handle leading and trailing spaces correctly', function() {
        assert.strictEqual(countAllPaarl('  CJ 123 , CA 456 , CJ 789  '), 2);
    });

    it('should count a single Paarl registration correctly', function() {
        assert.strictEqual(countAllPaarl('CJ 123'), 1);
    });
});
