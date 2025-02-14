const arr = [10, 20, 30, 40];

const output = arr.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
}, arr[0]); // Provide arr[0] as the initial value

console.log(output);
