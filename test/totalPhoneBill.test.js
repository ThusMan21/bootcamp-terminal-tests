import assert from 'assert';
import totalPhoneBill from '../totalPhoneBill.js';

describe('totalPhoneBill', function() {
    it('should calculate the total phone bill', function() {
        assert.strictEqual(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });

    it('should handle an empty string gracefully', function() {
        assert.strictEqual(totalPhoneBill(''), 'R0.00');
    });

    it('should handle only calls', function() {
        assert.strictEqual(totalPhoneBill('call, call'), 'R5.50');
    });

    it('should handle only SMSes', function() {
        assert.strictEqual(totalPhoneBill('sms, sms, sms'), 'R1.95');
    });
});
