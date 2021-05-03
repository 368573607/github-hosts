const getHosts = require("./update_hosts")

setInterval(() => {
    console.info(`${new Date().toLocaleString("zh-CN")}    开始更新`)
    getHosts()
}, 60000)