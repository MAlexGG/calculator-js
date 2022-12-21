import calculator from '../src/calculator.js';

test('should be declared', () => {
    expect(typeof calculator).toBe('function');
});

test('should total starts in zero', () => {
    expect(calculator().total).toEqual(0);
});

test('should sum 2 numbers', () => {
    expect(calculator().sum(0, 1)).toEqual(1);
});

test('should rest 2 numbers', () => {
    expect(calculator().rest(0, 1)).toEqual(-1);
});

test('should multiply 2 numbers', () => {
    expect(calculator().multiply(2, 2)).toEqual(4);
});

test('should divide 2 numbers', () => {
    expect(calculator().divide(6, 2)).toEqual(3);
});

test('should modify the total with sum and rest', () => {
    const sum = calculator().sum(0, 2);
    expect(calculator().rest(sum, 1)).toEqual(1);
});

test('should modify the total with rest and sum', () => {
    const rest = calculator().rest(5, 2);
    expect(calculator().sum(rest, 3)).toEqual(6);
});

test('should modify the total with all 4 operations', () => {
    const sum = calculator().sum(0, 5);
    const rest = calculator().rest(sum, 2);
    const multiply = calculator().multiply(rest, 2);
    expect(calculator().divide(multiply, 3)).toEqual(2);
});

test('should clean the total to zero', () => {
    calculator().sum(0, 5);
    expect(calculator().reset()).toEqual(0);
});


