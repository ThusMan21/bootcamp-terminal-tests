import assert from 'assert';
import countAllFromTown from '../countAllFromTown.js';

describe('countAllFromTown', function() {
    it('should count registration numbers from a specified town', function() {
        assert.strictEqual(countAllFromTown('CA 123, CJ 456, CY 789, CJ 321', 'CJ'), 2);
        assert.strictEqual(countAllFromTown('CA 123, CJ 456, CY 789, CJ 321', 'CA'), 1);
        assert.strictEqual(countAllFromTown('CA 123, CJ 456, CY 789, CJ 321', 'CY'), 1);
    });

    it('should handle no matching town registration numbers gracefully', function() {
        assert.strictEqual(countAllFromTown('CA 123, CY 789', 'CJ'), 0);
    });

    it('should handle empty string gracefully', function() {
        assert.strictEqual(countAllFromTown('', 'CJ'), 0);
    });

    it('should handle null input gracefully', function() {
        assert.strictEqual(countAllFromTown(null, 'CJ'), 0);
    });

    it('should handle undefined input gracefully', function() {
        assert.strictEqual(countAllFromTown(undefined, 'CJ'), 0);
    });

    it('should handle null town input gracefully', function() {
        assert.strictEqual(countAllFromTown('CA 123, CJ 456, CY 789, CJ 321', null), 0);
    });

    it('should handle undefined town input gracefully', function() {
        assert.strictEqual(countAllFromTown('CA 123, CJ 456, CY 789, CJ 321', undefined), 0);
    });

    it('should handle leading and trailing spaces correctly', function() {
        assert.strictEqual(countAllFromTown('  CJ 123 , CA 456 , CJ 789  ', 'CJ'), 2);
    });

    it('should count a single town registration correctly', function() {
        assert.strictEqual(countAllFromTown('CJ 123', 'CJ'), 1);
    });
});
