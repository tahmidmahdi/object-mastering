var name = 'kuddus';
function add(num1, num2) {
    result = num1 + num2;
    console.log('inside name: ', name);
    function double(num) {
        return num * 2;
    }
    var total = double(result);
    return total;
}
console.log('name outside', name);

var sum = add(13, 21);
console.log(sum);
console.log('result outside',result);
