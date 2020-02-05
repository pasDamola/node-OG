const uuid = require('uuid/v4');
const bcryptjs = require("bcryptjs");
let sde = '34rwe3232dfdfd'
sde = bcryptjs.hashSync(sde, 8)

console.log(sde)