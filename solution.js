function filterPositiveNumbers(numbers) {
    return numbers.filter(num => num > 0);
}

function capitalize(sentence){
     return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

}

function unique(array1, array2) {
    const both = array1.filter(num => array2.includes(num))
    const result1 = array1.filter(num => !both.includes(num))
    const result2 = array2.filter(num => !both.includes(num))
    const result = new Set(result1.concat(result2))
    return Array.from(result);
}
