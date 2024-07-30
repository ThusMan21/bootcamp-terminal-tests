import assert from 'assert';
import regCheck from '../regCheck.js';

describe('regCheck', function() {
    it('should return true for valid prefix and correct ending', function() {
        assert.strictEqual(regCheck('ABC 123 GP', 'GP'), true);
        assert.strictEqual(regCheck('XYZ 789 EC', 'EC'), true);
    });

    it('should return false for valid prefix but incorrect ending', function() {
        assert.strictEqual(regCheck('ABC 123 GP', 'EC'), false);
        assert.strictEqual(regCheck('XYZ 789 EC', 'GP'), false);
    });

    it('should return false for invalid prefix', function() {
        assert.strictEqual(regCheck('ABC 123 XX', 'XX'), false);
    });

    it('should return false for empty registration number', function() {
        assert.strictEqual(regCheck('', 'GP'), false);
    });

    it('should return false for empty prefix', function() {
        assert.strictEqual(regCheck('ABC 123 GP', ''), false);
    });

    it('should return false if prefix is not in valid prefixes list', function() {
        assert.strictEqual(regCheck('ABC 123 GP', 'ZZ'), false);
    });
});
