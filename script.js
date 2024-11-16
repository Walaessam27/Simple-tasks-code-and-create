// Task 2
function findsum(numbers) {
    const sum = numbers.reduce((sum, num) => sum + num, 0);
    const average = sum / numbers.length;
    return { res_sum: sum, average };
}

const numbers = [10, 20, 30, 40];
const final = findsum(numbers);
console.log(`Total: ${final.res_sum}, Average: ${final.average}`);

// Task 3
function remove_str(str) {

    const new_str = [...new Set(str)];
    return new_str;
}

const str = [ "sami", "Ahmad", "sami", "Ahmad", "Hadi", "Tala", "Wala'"];
const final_str = remove_str(str);
console.log("Unique Strings:", final_str);
