// test/isFromBellville.test.js
import assert from 'assert';
import isFromBellville from '../isFromBellville.js';

describe('isFromBellville', function() {
    it('should return true for registration numbers starting with "CY"', function() {
        assert.strictEqual(isFromBellville('CY12345'), true);
        assert.strictEqual(isFromBellville('CY67890'), true);
    });

    it('should return false for registration numbers not starting with "CY"', function() {
        assert.strictEqual(isFromBellville('CJ12345'), false);
        assert.strictEqual(isFromBellville('CA67890'), false);
    });

    it('should return false for an empty string', function() {
        assert.strictEqual(isFromBellville(''), false);
    });

    it('should return false for a null value', function() {
        assert.strictEqual(isFromBellville(null), false);
    });

    it('should return false for an undefined value', function() {
        assert.strictEqual(isFromBellville(undefined), false);
    });
});
