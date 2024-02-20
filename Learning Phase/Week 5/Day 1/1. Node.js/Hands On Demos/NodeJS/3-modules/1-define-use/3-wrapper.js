// function (exports, module, require, __filename,__dirname){
// exports = () => {} // not ok
module.exports = () => {}; //  ok
let g = 1;

console.log(arguments);

exports.a = 42;
module.exports.b = 37;
// return module.exports;
//} (module.exports)
