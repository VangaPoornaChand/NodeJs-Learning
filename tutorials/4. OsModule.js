
const os = require("os")

console.log(os.userInfo());
console.log("System up time in seconds: "+ os.uptime(), "in Min: "+os.uptime()/60, " In hours", os.uptime()/(60*60));
console.log(os.type());
console.log(os.totalmem());
console.log(os.freemem());