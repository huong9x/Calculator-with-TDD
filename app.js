const Calculator  = require('./calculator');
const Addition    = require('./Operator/addition');
const Subtraction = require('./Operator/subtraction');
const Multiply    = require('./Operator/mutiply');
const Division    = require('./Operator/division');
const chai        = require('chai');
const sinon       = require('sinon');

class FakeOperator {
    constructor(shouldReturn) {
        this.calles = [];
        this.shouldReturn = shouldReturn;
    }
    callCount() {
        return this.calles.length;
    }
    getCalled(index) {
        return this.calles[index];
    }
    run(number1, number2) {
        this.calles.push([number1, number2]);
        return this.shouldReturn;
    }
}

describe('Test calculator with addition', () => {
    const calculator = new Calculator();
    const fakeOps    = new FakeOperator(2019);
    calculator.register('fake', fakeOps);

    it('should return result from operator', () => {
        const result = calculator.calculate('fake', 1, 2);
        chai.assert.equal(result, 2019);
        chai.assert.equal(fakeOps.callCount(), 1);

        const callParameters = fakeOps.getCalled(0);
        chai.assert.equal(callParameters[0], 1);
        chai.assert.equal(callParameters[1], 2);
    });
});
