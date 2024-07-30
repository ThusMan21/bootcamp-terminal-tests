import assert from 'assert';
import yearsAgo from '../yearsAgo.js';

describe('yearsAgo', function() {
    it('should calculate the correct number of years ago', function() {
        const currentYear = new Date().getFullYear();
        assert.strictEqual(yearsAgo(currentYear - 5), 5); 
        assert.strictEqual(yearsAgo(currentYear - 20), 20); 
        assert.strictEqual(yearsAgo(currentYear - 1), 1); 
    });

    it('should handle the current year correctly', function() {
        const currentYear = new Date().getFullYear();
        assert.strictEqual(yearsAgo(currentYear), 0); 
    });

    it('should handle a future year correctly', function() {
        const futureYear = new Date().getFullYear() + 5;
        assert.strictEqual(yearsAgo(futureYear), -5); 
    });

    it('should handle very old years correctly', function() {
        assert.strictEqual(yearsAgo(1900), new Date().getFullYear() - 1900);
    });
});
