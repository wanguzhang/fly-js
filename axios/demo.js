const axios = require('axios');

const instance = axios.create();
console.log(instance.defaults);
console.log(instance.config);
