const getHosts = require("./update_hosts")

setInterval(getHosts, 100 * 60 * 60)