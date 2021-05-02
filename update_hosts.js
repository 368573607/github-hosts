const dns = require("dns")

const handleHosts = require("./handleHosts")

const front = "#官网：47.108.77.223"
const rear = "#当前版本更新于：" + new Date().toLocaleString("zh-CN") + "\n#end"

const domains = [
    /*
     * 这些地址来源于github520，
     * 但有些地址可能会返回0.0.0.0，
     * 但这不是程序自身的问题，
     * 而是防火墙的问题，
     * 尚未得到解决
    */
    "github.githubassets.com",
    "central.github.com",
    "desktop.githubusercontent.com",
    "assets-cdn.github.com",
    "camo.githubusercontent.com",
    "github.map.fastly.net",
    "github.global.ssl.fastly.net",
    "gist.github.com",
    "github.io",
    "github.com",
    "api.github.com",
    "raw.githubusercontent.com",
    "user-images.githubusercontent.com",
    "favicons.githubusercontent.com",
    "avatars5.githubusercontent.com",
    "avatars4.githubusercontent.com",
    "avatars3.githubusercontent.com",
    "avatars2.githubusercontent.com",
    "avatars1.githubusercontent.com",
    "avatars0.githubusercontent.com",
    "avatars.githubusercontent.com",
    "codeload.github.com",
    "github-cloud.s3.amazonaws.com",
    "github-com.s3.amazonaws.com",
    "github-production-release-asset-2e65be.s3.amazonaws.com",
    "github-production-user-asset-6210df.s3.amazonaws.com",
    "github-production-repository-file-5c1aeb.s3.amazonaws.com",
    "githubstatus.com",
    "github.community",
    "media.githubusercontent.com"
]

const handleError = (err) => {
    console.error(err)
    process.exit(0);
}

const jsonToHosts = (data) => {
    let result = ""
    for (let key in data) {
        const value = data[key] //遍历对象时的值
        result += "\n" + key + " " + value
    }
    return result
}

const hosts = {}
let resultNum = 0
for (let i of domains) {
    dns.resolve(i, (err, address) => {
        if (err) {
            handleError(err)
        } else if (address) {
            if (address.length > 1) {
                for (let j of address) {
                    if (j !== "0.0.0.0") {
                        address = j
                    }
                }
            } else {
                address = address[0]
            }
            hosts[i] = address
        }
        resultNum++
    })
}

const polling = () => {
    if (resultNum === domains.length) {
        const resultHosts = front + "\n\n" + jsonToHosts(hosts) + "\n\n" + rear //将结果加上前置文本与后缀文本
        handleHosts(resultHosts)
    } else {
        setTimeout(polling, 1000) //轮询
    }
}
polling()
