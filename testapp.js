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
        run(number1, number2) {
            return sinon.fake.returns(2019);
        }
    }
    calculator.register('fake', fakeOps);

    it('should return result from operator', () => {
        const result = calculator.calculate('fake', 1, 2);
        chai.assert.equal(fakeOps.run(1, 2), 2019);
        sinon.assert.calledOnce(fakeOps.run(1, 2));
        sinon.assert(fakeOps.run().calledWith(1, 2));
    });
});
