const _ = require('lodash');

var arr = [
    {name: 'Alice', age: 23},
    {name: 'Bob', age: 22},
    {name: 'Clara', age: 21},
    {name: 'Daniel', age: 23}
];

sortedArr = _.orderBy(arr, 'age', 'desc');

console.log(sortedArr);
