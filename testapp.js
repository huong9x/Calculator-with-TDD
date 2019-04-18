const Calculator  = require('./calculator');
const Addition    = require('./Operator/addition');
const Subtraction = require('./Operator/subtraction');
const Multiply    = require('./Operator/mutiply');
const Division    = require('./Operator/division');
const chai        = require('chai');
const sinon       = require('sinon');


describe('Test calculator with addition', () => {
    const calculator = new Calculator();
    const fakeOps    = {
        run: sinon.fake.returns(2019)
    }
    calculator.register('fake', fakeOps);

    it('should return result from operator', () => {
        const result = calculator.calculate('fake', 1, 2);
        chai.assert.equal(result, 2019);
        chai.assert(fakeOps.run.calledOnce, 'expect operator should be run once');
        chai.assert(fakeOps.run.calledWith(1,2), 'expect operator should be called with 1, 2');
    });
});
