export default function calculator() {
    var total = 0;
    
    const sum = (total, num) => {
        return total += num;
    };

    const rest = (total, num) => {
        return total -= num;
    };

    const multiply = (total, num) => {
        return total *= num;
    };

    const divide = (total, num) => {
        return total /= num;
    };
    
    const reset = () => {
        return total = 0;
    };

    return {
        total,
        sum,
        rest,
        multiply,
        divide,
        reset
    };

};
