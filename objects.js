const { add } = require('lodash');
const _ = require('lodash');

const profile = {name: 'John Doe', age: 24};
const address = {city: 'Mumbai', state: 'Maharashtra', country: 'India'};

const data = _.extend(profile, address);
console.log(data);
