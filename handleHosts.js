const fs = require("fs")

const handleHosts = (data) => { //得到hosts后如何处理它
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

module.exports = handleHosts