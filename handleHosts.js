const fs = require("fs")
const handleError = require("./handleError")
const exec = require("util").promisify(require("child_process").exec)

const _writeFile = (data) => { //得到hosts后如何处理它
    fs.writeFile("./hosts", data, { encoding: "utf-8" }, (err) => {
        if (err) {
            handleError(err)
        }
        console.log("successful!")
    })
    fs.readFile("./readme.template.md", { encoding: "utf-8" }, (err, template) => {
        if (err) {
            handleError(err)
        }
        template = template.replace("{{template:hosts}}", data)
        fs.writeFile("./readme.md", template, { encoding: "utf-8" }, (err) => {
            if (err) {
                handleError(err)
            }
        })
    })
}
const _pushToRepo = () => {
    exec("git add .").then(() => {
        return exec("git commit -m update")
    }).then(() => {
        return exec("git push origin")
    }).then(() => {
        return exec("git push github")
        console.info("推送至了两个repo")
    }).catch((err) => {
        handleError(err)
    })
}

const handleHosts = (data) => { //得到hosts后如何处理它
    _writeFile(data)
    _pushToRepo()
}

module.exports = handleHosts