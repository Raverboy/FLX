let a = parseInt(prompt('first value'), 10);
let b = parseInt(prompt('second value'), 10);
let c = parseInt(prompt('third value'), 10);
let discr = (b * b) - 4 * (a * c);
let sqrDiscr = Math.sqrt(discr);
let val1 = (-b + sqrDiscr) / (2 * a);
let val2 = (-b - sqrDiscr) / (2 * a);

if (discr < 0) {
    alert('no solution');

} else if (discr === 0) {
    alert(`x = ${val2}`);
} else if (discr > 0) {
    alert(
        `value1  ${val1}
         value2  ${val2}` 
    );
} else {
    alert('Invalid input data');
}
