var code = `
var fn = () => {}
I = 100; while(I--) { fn(); }
`;

const vm = require('vm');
const context = vm.createContext();
const script = new vm.Script(code);

console.time('vm');
script.runInContext(context);
console.timeEnd('vm');

console.time('eval');
eval(code);