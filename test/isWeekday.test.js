
import assert from 'assert';
import isWeekday from '../isWeekday.js';

describe('isWeekday', function() {
    it('should return true for weekdays', function() {
        assert.strictEqual(isWeekday('Monday'), true);
        assert.strictEqual(isWeekday('Tuesday'), true);
        assert.strictEqual(isWeekday('Wednesday'), true);
        assert.strictEqual(isWeekday('Thursday'), true);
        assert.strictEqual(isWeekday('Friday'), true);
    });

    it('should return false for weekends', function() {
        assert.strictEqual(isWeekday('Saturday'), false);
        assert.strictEqual(isWeekday('Sunday'), false);
    });

    it('should return false for an invalid day', function() {
        assert.strictEqual(isWeekday('Funday'), false);
    });

    it('should return false for an empty string', function() {
        assert.strictEqual(isWeekday(''), false);
    });

    it('should return false for a null value', function() {
        assert.strictEqual(isWeekday(null), false);
    });

    it('should return false for an undefined value', function() {
        assert.strictEqual(isWeekday(undefined), false);
    });
});
