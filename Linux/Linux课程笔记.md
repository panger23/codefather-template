# 操作系统概述

![image-20241127150835018](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438323.png)

![image-20241127150846644](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438957.png)

![image-20241127150856667](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438958.png)

![image-20241127150905936](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438959.png)

![image-20241127150922725](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438960.png)

## 初识Linux

![image-20241127150943659](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438961.png)

![image-20241127150954194](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438962.png)

![image-20241127151002852](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438963.png)

![image-20241127151013104](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438965.png)

![image-20241127151021168](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438966.png)



## 虚拟机介绍

![image-20241127151042657](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438967.png)

## VMware WorkStation安装

## 在VMware上安装Linux

## Mac系统Linux环境

## 远程连接Linux系统

![image-20241127151236204](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438968.png)

![image-20241127151243604](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438969.png)



## 拓展：WSL（Windows Subsystem for Linux）

![image-20241127151325614](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438970.png)





## 扩展：虚拟机快照

![image-20241127151337181](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438971.png)



# 一、Linux基础命令

在Linux系统中，路径之间的层级关系，使用：/ 来表示

在Windows系统中，路径之间的层级关系，使用： \ 来表示

## Linux的目录结构

![image-20221027214128453](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027214128.png)

- `/`，根目录是最顶级的目录了

- Linux只有一个顶级目录：`/`

- 路径描述的层次关系同样适用`/`来表示

- **/home/itheima/a.txt**，表示根目录下的home文件夹内有itheima文件夹，内有a.txt。

  **window则是D: \data\work\hello.txt**



## ls命令

功能：列出文件夹信息

语法：`ls [-l -h -a] [参数]`

- 参数：被查看的文件夹，不提供参数，表示查看当前工作目录
- -l，以列表形式查看
- -h，配合-l，以更加人性化的方式显示文件大小。
- -a，显示隐藏文件

```
ls -la /  ：展示根目录的文件包括隐藏文件，列表形式查看
(ls - l -a ;    ls -la ;    ls -al)组合三个都可以
ls -lh /  :以更加人性化的方式显示文件大小

ls -l  = ll (简写)
```



### 隐藏文件、文件夹

在Linux中以`.`开头的，均是隐藏的。

默认不显示出来，需要`-a`选项才可查看到。



## pwd命令（展示当前工作目录）

功能：展示当前工作目录

语法：`pwd`  :   print work directory

![image-20241125102030203](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438972.png)

## cd命令（切换工作目录）

功能：切换工作目录

语法：`cd [目标目录]`

参数：目标目录，要切换去的地方，**不提供默认切换到`当前登录用户HOME目录`**

![image-20241125101838094](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438973.png)

![image-20241125102326916](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438974.png)

## HOME目录

每一个用户在Linux系统中都有自己的专属工作目录，称之为HOME目录。

- 普通用户的HOME目录，默认在：`/home/用户名`

- root用户的HOME目录，在：`/root`



FinalShell登陆终端后，默认的工作目录就是用户的HOME目录



## 相对路径、绝对路径

- 相对路径，==非==`/`开头的称之为相对路径

  相对路径表示以`当前目录`作为起点，去描述路径，如`test/a.txt`，表示当前工作目录内的test文件夹内的a.txt文件

- 绝对路径，==以==`/`开头的称之为绝对路径

  绝对路径从`根`开始描述路径

![image-20241125103002687](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438975.png)

## 特殊路径符

- `.`，表示当前，比如./a.txt，表示当前文件夹内的`a.txt`文件
- `..`，表示上级目录，比如`../`表示上级目录，`../../`表示上级的上级目录
- `~`，表示用户的HOME目录，比如`cd ~`，即可切回用户HOME目录

**~ = /home/admin**

## mkdir命令（创建文件夹）

功能：创建文件夹

语法：`mkdir [-p] 参数`

- 参数：被创建文件夹的路径
- 选项：-p，可选，表示创建前置路径

![image-20241125104031005](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438976.png)

使用“-p”

![image-20241125104300433](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438977.png)

## touch命令（创建文件）

功能：创建文件

语法：`touch 参数`

- 参数：被创建的文件路径

![image-20241125104614633](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438978.png)



## cat命令（查看文件内容）

功能：查看文件内容

语法：`cat 参数`

- 参数：被查看的文件路径

![image-20241125104810727](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438979.png)

## more命令（查看文件，可以支持翻页查看）

功能：查看文件，可以支持翻页查看

语法：`more 参数`

- 参数：被查看的文件路径
- 在查看过程中：
  - `空格`键翻页
  - `q`退出查看



## cp命令（复制文件、文件夹）

功能：复制文件、文件夹

语法：`cp [-r] 参数1 参数2`

- 参数1，被复制的
- 参数2，要复制去的地方
- 选项：-r，可选，复制文件夹使用

示例：

- cp a.txt b.txt，复制当前目录下a.txt为b.txt
- cp a.txt test/，复制当前目录a.txt到test文件夹内
- cp -r test test2，复制文件夹test到当前文件夹内为test2存在

![image-20241125105514254](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438980.png)

## mv命令（移动文件、文件夹）

功能：移动文件、文件夹

语法：`mv 参数1 参数2`

- 参数1：被移动的
- 参数2：要移动去的地方，参数2如果不存在，则会进行改名

![image-20241125105832213](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438981.png)

## rm命令（删除文件、文件夹）

功能：删除文件、文件夹

语法：`rm [-r -f] 参数...参数`

- 参数：支持多个，每一个表示被删除的，空格进行分隔
- 选项：-r，删除文件夹使用
- 选项：-f，强制删除，不会给出确认提示，一般root用户会用到



> rm命令很危险，一定要注意，特别是切换到root用户的时候。



![image-20241125110443965](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438982.png)

![image-20241125110947864](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438984.png)

**示例：**

![image-20241125110857778](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438985.png)

**但是：**

![image-20241125111111892](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438986.png)



## which命令（查看命令的程序本体文件路径）

功能：查看命令的程序本体文件路径

语法：`which 参数`

- 参数：被查看的命令

![image-20241125142323787](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438987.png)

## find命令（搜索文件）

功能：搜索文件

语法1按文件名搜索：`find 起始路径 -name 参数（被查找的文件名）`
语法2按文件大小搜素：find 起始路径 -size +/-n[K/M/G]

- 路径，搜索的起始路径
- 参数，搜索的关键字，支持通配符*， 比如：`*`test表示搜索任意以test结尾的文件

![image-20241125142612069](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438988.png)

语法：

- +、- 表示大于和小于
- n表示大小数字
- kMG表示大小单位，k(小写字母)表示kb，M表示MB，G表示GB

示例：

- 查找小于10KB的文件： find / -size -10k
- 查找大于100MB的文件：find / -size +100M
- 查找大于1GB的文件：find / -size +1G

![image-20241125143349513](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438989.png)



## grep命令（过滤关键字）

功能：过滤关键字

语法：`grep [-n] 关键字 文件路径`

- 选项-n，可选，表示在结果中显示匹配的行的行号。
- 参数，关键字，必填，表示过滤的关键字，带有空格或其它特殊符号，建议使用””将关键字包围起来
- 参数，文件路径，必填，表示要过滤内容的文件路径，可作为内容输入端口



> 参数文件路径，可以作为管道符的输入

![image-20241125143802254](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438990.png)



## wc命令（统计）

功能：统计

语法：`wc [-c -m -l -w] 文件路径`

- 选项，-c，统计bytes数量
- 选项，-m，统计字符数量
- 选项，-l，统计行数
- 选项，-w，统计单词数量
- 参数，文件路径，被统计的文件，可作为内容输入端口



> 参数文件路径，可作为管道符的输入

![image-20241125144005331](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438991.png)

​							（2代表行数，11代表单词数，59代表字节数）

## 管道符| （将符号左边的结果，作为符号右边的输入）

写法：`|`

功能：将符号左边的结果，作为符号右边的输入

示例：

`cat a.txt | grep itheima`，将cat a.txt的结果，作为grep命令的输入，用来过滤`itheima`关键字



可以支持嵌套：

`cat a.txt | grep itheima | grep itcast`

![image-20241125144659278](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438992.png)

![image-20241125144807959](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438993.png)



## echo命令 （输出内容  = printf）

功能：输出内容

语法：`echo 参数`

- 参数：被输出的内容

![image-20241125145055016](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438994.png)



## `反引号 （被两个反引号包围的内容，会作为命令执行）

功能：被两个反引号包围的内容，会作为命令执行

示例：

- echo \`pwd\`，会输出当前工作目录

![image-20241125145233341](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438995.png)



## tail命令（查看文件尾部内容）

功能：查看文件尾部内容（默认10行）

语法：`tail [-f -5/20等] 参数`

- 参数：被查看的文件
- 选项：-f，持续跟踪文件修改                               f: follow  暂停使用 ctrl c

![image-20241125150223624](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438996.png)



![image-20241125150202115](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438997.png)

## head命令（查看文件头部内容）

功能：查看文件头部内容

语法：`head [-n] 参数`

- 参数：被查看的文件
- 选项：-n，查看的行数

![image-20241125150431580](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438998.png)



## 重定向符 （将符号左边的结果，输出到右边指定的文件中去）

功能：将符号左边的结果，输出到右边指定的文件中去

- `>`，表示覆盖输出
- `>>`，表示追加输出

![image-20241125145503797](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438999.png)

![image-20241125145643598](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438000.png)



## vi编辑器

![image-20241125151217300](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438001.png)

![image-20241125150958322](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438002.png)

![image-20241125151134920](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438003.png)



### 命令模式快捷键

![image-20221027215841573](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027215841.png)

![image-20221027215846581](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027215846.png)

![image-20221027215849668](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027215849.png)

### 底线命令快捷键

![image-20221027215858967](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027215858.png)



## 命令的选项

我们学习的一系列Linux命令，它们所拥有的选项都是非常多的。

比如，简单的ls命令就有：-a -A -b -c -C -d -D -f -F -g -G -h -H -i -I -k -l -L -m -n -N -o -p -q -Q -r-R -s -S -t -T -u -U -v -w -x -X -1等选项，可以发现选项是极其多的。

课程中， 并不会将全部的选项都进行讲解，否则，一个ls命令就可能讲解2小时之久。

课程中，会对常见的选项进行讲解， 足够满足绝大多数的学习、工作场景。



### 查看命令的帮助

可以通过：`命令 --help`查看命令的帮助手册

![image-20221027220005610](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027220005.png)

### 查看命令的详细手册

可以通过：`man 命令`查看某命令的详细手册

man ls

![image-20221027220009949](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027220010.png)





# 三、Linux常用操作

## 各类小技巧

### 强制停止: ctrl + c

- Linux某些程序的运行，如果想要强制停止它，可以使用快捷键ctrl + c
- 命令输入错误，也可以通过快捷键ctrl + c，退出当前输入，重新输入

### 退出 ctrl + d

- 可以通过快捷键：ctrl + d，退出账户的登录
- 或者退出某些特定程序的专属页面(如python环境)

ps：不能用于退出vi/vim

### 登出历史命令搜索 history

- 可以通过history命令，查看历史输入过的命令

![image-20241126104332301](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438004.png)

- 可以通过：!命令前缀，自动执行上一次匹配前缀的命令

![image-20241126104514715](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438005.png)

- 可以通过快捷键：ctrl + r，输入内容去匹配历史命令

![image-20241126104823653](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438006.png)

- 箭头的上和下

### 光标移动

![image-20241126105009454](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438007.png)

### 清屏

![image-20241126105043064](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438008.png)



## 软件安装

[配置yum源](https://blog.csdn.net/weixin_62746478/article/details/140794107?ops_request_misc=%257B%2522request%255Fid%2522%253A%25228c1f207050ff7680ae34aa68f10916eb%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=8c1f207050ff7680ae34aa68f10916eb&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-140794107-null-null.142^v100^control&utm_term=Could%20not%20retrieve%20mirrorlist%20http%3A%2F%2Fmirrorlist.centos.org%2Frelease%3D7%26arch%3Dx86_64%26repo%3Dos%26infra%3Dstock%20error%20was%2014%3A%20curl%236%20-%20Could%20not%20resolve%20host%3A%20mirrorlist.centos.org%3B%20Unknown%20error&spm=1018.2226.3001.4187)安装wget



![image-20241126141933239](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438009.png)



- CentOS系统使用：**（使用.rpm安装文件，使用yum）**
  - yum [install remove search] [-y] 软件名称
    - install 安装
    - remove 卸载
    - search 搜索
    - -y，自动确认
- Ubuntu系统使用    **（使用.deb安装文件，使用apt）**
  - apt [install remove search] [-y] 软件名称
    - install 安装
    - remove 卸载
    - search 搜索
    - -y，自动确认

> yum 和 apt 均需要root权限







## systemctl （控制系统服务的启动关闭等）

![image-20241126144817870](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438010.png)



功能：控制系统服务的启动关闭等

语法：`systemctl start | stop | restart | disable | enable | status 服务名`

- start，启动
- stop，停止
- status，查看状态
- disable，关闭开机自启
- enable，开启开机自启
- restart，重启



![image-20241126144950254](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438011.png)

```shell
// 依次执行
sudo yum -y install httpd
sudo systemctl start httpd
sudo systemctl enbale httpd
sudo systemctl status httpd
```



## 软链接 （ln）

![image-20241126153351535](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438012.png)



功能：创建文件、文件夹软链接（快捷方式）

语法：`ln -s 参数1 参数2`

- 参数1：被链接的
- 参数2：要链接去的地方（快捷方式的名称和存放位置）

![image-20241126153705129](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438013.png)



## 日期 （date）

语法：`date [-d] [+格式化字符串]`

- -d 按照给定的字符串显示日期，一般用于日期计算

- 格式化字符串：通过特定的字符串标记，来控制显示的日期格式
  - %Y   年%y   年份后两位数字 (00..99)
  - %m   月份 (01..12)
  - %d   日 (01..31)
  - %H   小时 (00..23)
  - %M   分钟 (00..59)
  - %S   秒 (00..60)
  - %s   自 1970-01-01 00:00:00 UTC 到现在的秒数



示例：

- 按照2022-01-01的格式显示日期

  ![image-20221027220514640](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027220514.png)

- 按照2022-01-01 10:00:00的格式显示日期

  ![image-20221027220525625](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027220525.png)

- -d选项日期计算

  ![image-20221027220429831](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027220429.png)

  - 支持的时间标记为：

    ![image-20221027220449312](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027220449.png)





## 时区

修改时区为中国时区

![image-20221027220554654](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027220554.png)



## ntp （同步时间）

功能：同步时间

安装：`yum install -y ntp`

启动管理：`systemctl start | stop | restart | status | disable | enable ntpd`



手动校准时间：`ntpdate -u ntp.aliyun.com`



```shell
// 依次执行
sudo yum -y install npt
sudo systemctl start nptd
sudo systemctl enbale nptd
sudo systemctl status nptd
```



## ip地址

格式：a.b.c.d

- abcd为0~255的数字



特殊IP：

- 127.0.0.1，表示本机
- 0.0.0.0
  - 可以表示本机
  - 也可以表示任意IP（看使用场景）



查看ip：`ifconfig`



## 主机名 （hostname）

功能：Linux系统的名称

查看：`hostname`

设置：`hostnamectl set-hostname 主机名`

## 域名解析

![image-20241126161812669](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438014.png)



## 配置VMware固定IP

![image-20241126162459888](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438015.png)



1. 修改VMware网络，参阅PPT，图太多

2. 设置Linux内部固定IP

   修改文件：`/etc/sysconfig/network-scripts/ifcfg-ens33`

   示例文件内容：

   ```shell
   TYPE="Ethernet"
   PROXY_METHOD="none"
   BROWSER_ONLY="no"
   BOOTPROTO="static"			# 改为static，固定IP
   DEFROUTE="yes"
   IPV4_FAILURE_FATAL="no"
   IPV6INIT="yes"
   IPV6_AUTOCONF="yes"
   IPV6_DEFROUTE="yes"
   IPV6_FAILURE_FATAL="no"
   IPV6_ADDR_GEN_MODE="stable-privacy"
   NAME="ens33"
   UUID="1b0011cb-0d2e-4eaa-8a11-af7d50ebc876"
   DEVICE="ens33"
   ONBOOT="yes"
   IPADDR="192.168.88.131"		# IP地址，自己设置，要匹配网络范围
   NETMASK="255.255.255.0"		# 子网掩码，固定写法255.255.255.0
   GATEWAY="192.168.88.2"		# 网关，要和VMware中配置的一致
   DNS1="192.168.88.2"			# DNS1服务器，和网关一致即可
   ```

## 进程

![image-20241127094238196](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438016.png)



## ps命令 （查看进程信息）

功能：查看进程信息

语法：`ps -ef`，查看全部进程信息，可以搭配grep做过滤：`ps -ef | grep xxx`

![image-20241127094458572](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438017.png)

![image-20241127094857514](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438018.png)



## kill命令 （关闭进程）

![image-20221027221303037](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221303.png)



## ping命令 （测试网络是否联通）

测试网络是否联通

语法：`ping [-c num] 参数`

![image-20221027221129782](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221129.png)



## wget命令 （在命令行下载网络文件）

![image-20221027221148964](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221149.png)

## curl命令 （相当于打开网站，但是返回的是代码）也可以下载文件

![image-20221027221201079](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221201.png)

![image-20221027221210518](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221210.png)

## 端口

![image-20241126164514160](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438019.png)

![image-20241126164742440](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438020.png)

![image-20241127093000291](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438021.png)

## nmap命令 （查看某ip的对外暴露的端口）

![image-20241127093331317](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438022.png)

## netstat命令 （查看指定端口的占用情况）

![image-20241127093534907](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438023.png)





## top命令 （查看系统资源占用）

功能：查看主机运行状态

语法：`top`，查看基础信息

![image-20241127095623914](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438025.png)

![image-20241127095852882](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438026.png)



可用选项：

![image-20221027221340729](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221340.png)



交互式模式中，可用快捷键：

![image-20221027221354137](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221354.png)



## df命令 （查看磁盘占用）

查看磁盘占用

![image-20221027221413787](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221413.png)



## iostat命令 （查看CPU、磁盘的相关信息）

查看CPU、磁盘的相关信息

![image-20221027221439990](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221440.png)

![image-20221027221514237](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221514.png)



## sar命令 （查看网络统计）

查看网络统计

![image-20221027221545822](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221545.png)



## 环境变量

![image-20241127101538830](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438027.png)



- 临时设置：export 变量名=变量值      （关闭finalShell后就没有了）

![image-20241127102207333](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438028.png)



- 永久设置：
  - 针对用户，设置用户HOME目录内：`.bashrc`文件

  ![image-20241127102645766](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438029.png)

  

  - 针对全局，设置`/etc/profile`



### PATH变量

记录了执行程序的搜索路径

可以将自定义路径加入PATH内，实现自定义命令在任意地方均可执行的效果

![image-20241127101804768](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438030.png)



## $符号

可以取出指定的环境变量的值

语法：`$变量名`

示例：

`echo $PATH`，输出PATH环境变量的值

`echo ${PATH}ABC`，输出PATH环境变量的值以及ABC（拼接ABC）

如果变量名和其它内容混淆在一起，可以使用${}



## 上传、下载

![image-20241127104938009](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438031.png)

## rz、sz命令

![image-20241127142251626](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438032.png)

**rz太慢了，拖进去下载比较好。**

## 压缩解压

![image-20241127143457323](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438033.png)

![image-20241127143739609](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438034.png)



### 压缩

![image-20241127144038678](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438035.png)

`tar -zcvf 压缩包 被压缩1...被压缩2...被压缩N`

- -z表示使用gzip，可以不写





使用zip命令，压缩文件为zip压缩包。

`zip [-r] 参数1 参数2 参数N`

![image-20221027221906247](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221906.png)



### 解压

![image-20241127144623410](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438036.png)

`tar -zxvf 被解压的文件 -C 要解压去的地方`

- -z表示使用gzip，可以省略
- -C，可以省略，指定要解压去的地方，不写解压到当前目录







`unzip [-d] 参数`

![image-20221027221939899](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027221939.png)

# 二、linux用户和权限

## root用户

![image-20241125154009362](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438037.png)

![image-20241125154041076](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438038.png)



## su命令      （切换用户：switch user）

切换用户

语法：`su [-] [用户]`

![image-20221027222021619](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027222021.png)

退回用户 ： `exit`

![image-20241125154923682](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438039.png)



## sudo命令 （让普通命令带root权限）

![image-20221027222035337](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027222035.png)



比如：

```shell
itheima ALL=(ALL)       NOPASSWD: ALL
```

在visudo内配置如上内容，可以让itheima用户，无需密码直接使用`sudo`

## 查看权限控制 （ls -l）

![image-20241126094637304](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438040.png)

![image-20241126095217717](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438041.png)

**r读，w写，x执行**

![image-20241126095751098](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438042.png)

![image-20241126100352188](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438043.png)



## chmod命令 （修改文件、文件夹权限）

修改文件、文件夹权限

![image-20241126101129151](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438044.png)



语法：`chmod [-R] 权限 参数`

数字的细节如下：**r记为4，w记为2，x记为1**，可以有：**（二进制，看组合，建议使用数字序号）**

- 权限，要设置的权限，比如755，表示：`rwxr-xr-x`

  ![image-20221027222157276](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027222157.png)

- 参数，被修改的文件、文件夹

- 选项-R，设置文件夹和其内部全部内容一样生效

![image-20241126101030268](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438045.png)

![image-20241126101052347](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438046.png)



## chown命令 （修改文件、文件夹所属用户、组）

修改文件、文件夹所属用户、组

**普通用户无法修改所属为其他用户或组，所以此命令只适用于root用户执行。**

![image-20241126103028882](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438047.png)



语法：`chown [-R] [用户][:][用户组] 文件或文件夹`

![image-20221027222326192](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027222326.png)



## 用户组管理

![image-20241125160358995](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438048.png)

![image-20221027222354498](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027222354.png)



## 用户管理

![image-20221027222407618](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027222407.png)

![image-20241125161217835](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438049.png)

![image-20241126092754610](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438050.png)

![image-20241126093600268](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438051.png)

![image-20241126093829328](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501101438052.png)



## getent命令 （查看系统全部的用户/用户组）

- `getent group`，查看系统全部的用户组

  ![image-20221027222446514](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027222446.png)

  包含3份信息，组名称:组认证(显示为x):组ID

  

- `getent passwd`，查看系统全部的用户

  ![image-20221027222512274](https://image-set.oss-cn-zhangjiakou.aliyuncs.com/img-out/2022/10/27/20221027222512.png)

共有7份信息，分别是：用户名:密码(x):用户ID:组ID:描述信息(无用):HOME目录:执行终端(默认bash)

## env命令

查看系统全部的环境变量

语法：`env`





























