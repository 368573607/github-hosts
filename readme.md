# Github Hosts
定时更新github的hosts，参照了[github520](/521xueweihan/GitHub520)这个项目，不同的是它使用python，而且是直接调用的ipaddress接口，而此程序则使用的是js，并使用原生dns模块，由于github520所生成的hosts有的时候任然解决不了github访问时好时坏的问题，所以我做了这个项目，针对大陆用户的速度有着明显的提升，可当然你也可以将此项目看做是github520的js版本

所有Hosts域名均参照了github520，因为一些不明原因，有几个域名的ip将返回0.0.0.0，出现这个问题有可能跟防火墙有关，后期将会通过一些科学手段绕过它，目前这个问题不会影响基本的使用。

作者官网：[红日初升的小站](http://47.108.77.223)

## hosts

你可以手动复制hosts内容到你的电脑中：

```
#官网：47.108.77.223


0.0.0.0 assets-cdn.github.com
185.199.111.133 github.map.fastly.net
185.199.110.133 camo.githubusercontent.com
13.229.188.59 github.com
192.30.255.117 api.github.com
0.0.0.0 raw.githubusercontent.com
185.199.108.133 avatars3.githubusercontent.com
185.199.110.133 avatars2.githubusercontent.com
185.199.109.133 avatars5.githubusercontent.com
185.199.108.133 user-images.githubusercontent.com
162.220.12.226 github.global.ssl.fastly.net
185.199.110.133 avatars1.githubusercontent.com
185.199.110.133 avatars0.githubusercontent.com
52.216.238.235 github-production-release-asset-2e65be.s3.amazonaws.com
185.199.108.133 favicons.githubusercontent.com
185.199.108.133 avatars.githubusercontent.com
54.251.140.56 codeload.github.com
185.199.110.153 githubstatus.com
52.217.107.180 github-production-repository-file-5c1aeb.s3.amazonaws.com
52.217.107.180 github-production-user-asset-6210df.s3.amazonaws.com
52.217.107.180 github-cloud.s3.amazonaws.com
52.217.107.180 github-com.s3.amazonaws.com
243.185.187.39 gist.github.com
185.199.108.154 github.githubassets.com
140.82.114.22 central.github.com
185.199.109.133 desktop.githubusercontent.com
185.199.110.153 github.io
185.199.108.133 avatars4.githubusercontent.com
64.71.168.201 github.community
185.199.111.133 media.githubusercontent.com

#当前版本更新于：2021/5/3 下午1:58:10
#end
```

如何更改你电脑中的hosts内容不用我多说了吧，如果不会，可以自行百度，谷歌也行

## 自动更新

自动更新可以使用[switch hosts](/oldj/SwitchHosts)，官方的[自述文件](https://github.com/oldj/SwitchHosts#readme)很详细，可以参照

## 其他

此项目在我的网络环境下测试正常，但我不能保证在所有环境下都测试正常，因此，如果你的电脑使用了此hosts，打开github任然出现问题。那么，你可以clone或者下载本项目，在项目目录下运行：`node update_hosts`，控制台返回`successful!`之后你会发现hosts文件更新了，这就是最新的hosts，复制到电脑中即可（当然你需要一个node环境）

