class Calcualtor {

    constructor() {
        this.operators = {};
    }

    register(name, operator) {
        this.operators[name] = operator;
        return this;
    }

    calculate(operatorName, number1, number2) {
        const operator = this.operators[operatorName];
        if (!operator) {
            throw new Error(`Operator [${operatorName}] is not supported!`);
        }

        return operator.run(number1, number2);
    }
}

module.exports = Calcualtor;
