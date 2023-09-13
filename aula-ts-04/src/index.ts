function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 * num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function isNumber(value: unknown): value is number {
    return typeof value === "number" && !isNaN(value as number);
}

function showResult(result: number) {
    if(isNumber(result)) {
        console.log(`The result is ${result} and it's ${isEven(result) ? "even" : "odd"}!`);
    } else {
        console.log(`Invalid input.`);
    }
}

(() => {
    const input1 = prompt("First Number");
    const input2 = prompt("Second Number");

    const num1 = input1 !== null ? parseFloat(input1) : NaN;
    const num2 = input2 !== null ? parseFloat(input2) : NaN;
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = sum(num1, num2);
        result += multiply(num1, num2);
        showResult(result);
    } else {
        console.log(`Invalid input.`);
    }
})();
