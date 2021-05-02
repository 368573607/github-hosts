# Github Hosts
定时更新github的hosts，参照了[github520](/521xueweihan/GitHub520)这个项目，不同的是它使用python，而且是直接调用的ipaddress接口，而此程序则使用的是js，并使用原生dns模块，其余功能区别不大，可以看做是[github520](/521xueweihan/GitHub520)的js版本

所有Hosts域名均参照了[github520](/521xueweihan/GitHub520)，因为一些不明原因，有几个域名的ip将返回0.0.0.0，出现这个问题有可能跟防火墙有关，后期将会通过一些科学手段绕过它，目前这个问题不会影响基本的使用。

作者官网：[红日初升的小站](http://47.108.77.223)

## hosts

你可以手动复制hosts内容到你的电脑中：

```
#官网：47.108.77.223


github.githubassets.com 185.199.108.154
desktop.githubusercontent.com 185.199.110.133
assets-cdn.github.com 0.0.0.0
camo.githubusercontent.com 185.199.109.133
github.map.fastly.net 185.199.108.133
github.io 0.0.0.0
api.github.com 192.30.255.117
raw.githubusercontent.com 0.0.0.0
user-images.githubusercontent.com 185.199.108.133
github.com 52.74.223.119
avatars5.githubusercontent.com 185.199.108.133
avatars4.githubusercontent.com 185.199.110.133
avatars3.githubusercontent.com 185.199.108.133
avatars2.githubusercontent.com 185.199.110.133
avatars.githubusercontent.com 185.199.109.133
github-production-release-asset-2e65be.s3.amazonaws.com 52.217.64.172
media.githubusercontent.com 185.199.110.133
github.global.ssl.fastly.net 108.160.165.211
gist.github.com 59.24.3.173
avatars1.githubusercontent.com 185.199.109.133
avatars0.githubusercontent.com 185.199.111.133
central.github.com 140.82.112.22
favicons.githubusercontent.com 185.199.110.133
githubstatus.com 185.199.111.153
codeload.github.com 192.30.255.121
github.community 64.71.168.201
github-com.s3.amazonaws.com 52.216.251.140
github-production-repository-file-5c1aeb.s3.amazonaws.com 52.217.104.100
github-production-user-asset-6210df.s3.amazonaws.com 52.217.104.100
github-cloud.s3.amazonaws.com 52.217.104.100

#当前版本更新于：2021/5/2 下午8:51:09
#end
```

如何更改你电脑中的hosts内容不用我多说了吧，如果不会，可以自行百度，谷歌也行

## 自动更新

自动更新可以使用[switch hosts](/oldj/SwitchHosts)，官方的[自述文件](https://github.com/oldj/SwitchHosts#readme)很详细，可以参照

