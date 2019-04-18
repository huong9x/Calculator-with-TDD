const Calculator  = require('./calculator');
const Addition    = require('./Operator/addition');
const Subtraction = require('./Operator/subtraction');
const Multiply    = require('./Operator/mutiply');
const Division    = require('./Operator/division');
const chai        = require('chai');
const sinon       = require('sinon');


describe('Test calculator for each function', () => {
    const calculator = new Calculator();
    const fakeOps    = {
        run: sinon.fake.returns(2020)
    }
    calculator.register('fake', fakeOps);

    it('should return result from operator', () => {
        const result = calculator.calculate('fake', 1, 2);
        chai.assert.equal(result, 2020);
        chai.assert(fakeOps.run.calledOnce, 'expect operator should be run once');
        chai.assert(fakeOps.run.calledWith(1,2), 'expect operator should be called with 1, 2');
    });

    it('can do multiply', () => {
        calculator.register('*', new Multiply())
        chai.assert.equal(calculator.calculate('*', 1, 2), 2);
    });

    it('can do divison', () => {
        calculator.register('/', new Division())
        chai.assert.equal(calculator.calculate('/', 4, 2), 2);
    });

    it('can do addition', () => {
        calculator.register('+', new Addition())
        chai.assert.equal(calculator.calculate('+', 1, 2), 3);
    });

    it('can do subtraction', () => {
        calculator.register('-', new Subtraction())
        chai.assert.equal(calculator.calculate('-', 3, 2), 1);
    });

    it('should be throw error if operator is not supported', () => {
        chai.assert.throw(() => {
            calculator.calculate('x' , 5 , 6);
        },`Operator [x] is not supported!`);
    });
});

