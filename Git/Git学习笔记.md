# Git学习笔记

## 1、版本控制

### 1.1 什么是版本控制（版本迭代，新的版本出来了）

版本迭代，开发过程中，对项目各个阶段的版本的控制。

在开发过程中用于管理我们对文件、目录或工程等内容的修改历史，方便查看更改历史记录，备份以便恢复以前的版本。

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128812.png" alt="image-20241015102313028" style="zoom:50%;" />



多人开发必须要使用版本控制。

### 1.2 常见的版本控制工具

+ **Git**   （当下最流行）
+ **SVN**
+ **CVS**
+ **VSS**
+ **TFS**
+ Visual Studio Online

版本控制产品⾮常的多（Perforce、Rational ClearCase、RCS（GNU Revision Control System）、Serena Dimention、SVK、BitKeeper、Monotone、Bazaar、Mercurial、SourceGear Vault），现在影响⼒最⼤且使⽤最⼴泛的是Git与SVN

### 1.3 版本控制分类

#### 版本分类

1.本地版本控制

2.集中版本控制

3.分布式版本控制

#### 1.3.1 本地版本控制

记录文件每次的更新，可以对每个版本做一个快照，或是记录补丁文件，适合个人，如RCS。

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128813.png" alt="image-20241015102418891" style="zoom:50%;" />

#### 1.3.2 集中版本控制

​	所有的版本数据都保存在服务器上，协同开发者从服务器上同步更新或上传⾃⼰的修改

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128814.png" alt="image-20241015102437832" style="zoom:50%;" />

​	所有的版本数据都存在服务器上，⽤户的本地只有⾃⼰以前所同步的版本，如果不连⽹的 话，⽤户就看不到历史版本，也⽆法切换版本验证问题，或在不同分⽀⼯作。⽽且，所有 数据都保存在单⼀的服务器上，有很⼤的⻛险这个服务器会损坏，这样就会丢失所有的数 据，当然可以定期备份。代表产品：SVN、CVS、VSS

不连网，用户看不到历史版本。

#### 1.3.3 分布式版本控制

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128815.png" alt="image-20241015102532701" style="zoom:50%;" />

​	每个⼈都拥有全部的代码！安全隐患！ 所有版本信息仓库全部同步到本地的每个⽤户，这样就可以在本地查看所有版本历史，可 以离线在本地提交，只需在连⽹时push到相应的服务器或其他⽤户那⾥。由于每个⽤户那⾥保存的都是所有的版本数据，只要有⼀个⽤户的设备没有问题就可以恢复所有的数据， 但这增加了本地存储空间的占⽤。

​	不会因为服务器损坏或者网络问题，造成不能工作的情况。

#### 1.3.4 Git与SVN的主要区别

**SVN是集中式版本控制系统**，版本库是集中放在中央服务器的，⽽⼯作的时候，⽤的都是 ⾃⼰的电脑，所以⾸先要从中央服务器得到最新的版本，然后⼯作，完成⼯作后，需要把 ⾃⼰做完的活推送到中央服务器。集中式版本控制系统是必须联⽹才能⼯作，对⽹络带宽 要求较⾼。

**Git是分布式版本控制系统**，没有中央服务器，每个⼈的电脑就是⼀个完整的版本库，⼯作 的时候不需要联⽹了，因为版本都在⾃⼰电脑上。协同的⽅法是这样的：⽐如说⾃⼰在电 脑上改了⽂件A，其他⼈也在电脑上改了⽂件A，这时，你们两之间只需把各⾃的修改推送 给对⽅，就可以互相看到对⽅的修改了。Git可以直接看到更新了哪些代码和⽂件！

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128816.png" alt="image-20241015103113481" style="zoom:50%;" />

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128817.png" alt="image-20241015103619249" style="zoom:50%;" />

### 1.4 Git环境配置

#### 1.4.1 软件下载 

[Mac安装git使用homebrew](https://blog.csdn.net/weixin_45626288/article/details/128322610?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522B3C14CB6-91DA-46AD-9D06-271EE28A7C7A%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=B3C14CB6-91DA-46AD-9D06-271EE28A7C7A&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~top_positive~default-1-128322610-null-null.nonecase&utm_term=mac安装git&spm=1018.2226.3001.4450)

打开 [git官⽹] https://git-scm.com/，下载git对应操作系统的版本。 所有东⻄下载慢的话就可以去找镜像！ 官⽹下载太慢，我们可以使⽤淘宝镜像下载：http://npm.taobao.org/mirrors/git-for-windows/

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128818.png" alt="image-20241015103926036" style="zoom:50%;" />

#### 1.4.2 启动Git

安装成功后在开始菜单中会有Git项，菜单下有3个程序：任意⽂件夹下右键也可以看到对应的程序。

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128819.png" alt="image-20241015103912191" style="zoom:50%;" />

## 2、常用Linux命令

### 基本的Linux命令(多用多练)

#### 改变目录

~~~bash
#返回上一级目录
cd ..

#切换目录
cd 目录路径+目录名
~~~

#### 显示目录

~~~bash
pwd
~~~

#### 清屏

~~~bash
clear
~~~

#### 列出当前目录下的文件

~~~bash
ls
~~~

#### 创建文件

~~~bash
#创建一个index.js
touch index.js
~~~

#### 删除文件

~~~bash
rm index.js
~~~

#### 新建目录

~~~bash
mkdir 文件目录名字

mkdir test
~~~

#### 删除目录

~~~bash
rm -r 文件目录名字

rm -r test
rm -rf /  切勿在linux中尝试，会删除电脑中全部文件
~~~

#### 移动文件

~~~bash
mv 目标对象 移动的位置
~~~

#### 查看历史命令

~~~bash
history
~~~

#### 帮助（zsh没有）

```
help
```

#### 退出

```
exit
```



## 3、Git的必要配置

### 查看配置的命令

通常 Homebrew 安装的 Git 并不会生成 /etc/gitconfig，你可能需要手动创建它或者使用 git config --global 来配置全局设置。

~~~bash
#查看Git配置
git config -l

#查看系统配置(mac没有)
git config --system --list

#查看本地的一些配置
git config --global --list
~~~

![image-20241015145220840](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128820.png)



### 设置邮箱和用户名

邮箱和用户名会被嵌入到所有的提交信息中，便于让别人知道是谁提交的

**必须配置**

~~~bash
git config --global user.name 用户名
git config --global user.email 邮箱
~~~

只需要做⼀次这个设置，如果你传递了--global 选项，因为Git将总是会使⽤该信息来处理 你在系统中所做的⼀切操作。如果你希望在⼀个特定的项⽬中使⽤不同的名称或e-mail地 址，你可以在该项⽬中运⾏该命令⽽不要--global选项。总之--global为全局配置，不加为 某个项⽬的特定配置。

### 配置文件的位置

**所有的配置文件都在本地**

**Git的配置文件在：Git --> etc --> gitconfig**

## 4、Git 的基本理论

### Git 工作区域

Git本地有三个⼯作区域：**⼯作⽬录（Working Directory）、暂存区(Stage/Index)、资源库 (Repository或Git Directory)**。如果在加上远程的**git仓库(Remote Directory)**就可以分为四个⼯作区域。⽂件在这四个区域之间的转换关系如下

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128821.png" alt="image-20241015145446706" style="zoom:50%;" />



+ WorkSpace 工作区，平时存代码的地方（例如 Idea 项目文件所在位置）
+ Stage 暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交的文件列表信息 （项目中  .git  文件夹）
+ Repository  仓库，就是安全存放数据的位置，这里有你提交的所有版本的数据，其中HEAD 指向最新放入仓库的版本 

+ 远程仓库   Github 、Gitee（码云）

### Git的必要命令

~~~bash
#从工作区添加到暂存区（文件只是暂时保存，还没有永久化）
git add

#从暂存区提交到本地的Git仓库
git commit

#从本地仓库提交到远程仓库
git push

#从远程仓库把代码拉到本地
git pull

#从本地仓库回滚到暂存区
git reset

#从暂存区检出到工作区
git checkout
~~~

### Git 的工作流程

1.在目工作录中添加、修改文件

2.将需要进行版本管理的文件放入暂存区域（git add)

3.将暂存区的文件提交到git仓库（git commit）

**git 管理的文件有三种状态：已修改、已暂存、已提交**

### 分支

+ **分支就是平行宇宙** 

**master** 主分支

![image-20241015160116395](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128822.png)



#### 分支中常用的命令

~~~bash
#列出所有本地分支
git branch

#列出所有远程分支
git branch -r

#新建一个分支，但是依然停留在当前分支
git branch [branch-name]
git branch dev

#新建一个分支，并切换到新分支
git checkout -b [branch]
git checkout -b dev

#合并指定分支到当前分支
git merge [branch]

#删除分支
git branch -d [branch-name]

#删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]

# 切换分支
git checkout dev
~~~

+ 多个分支并行执行，就会导致我们代码不冲突，也就是同时存在多个版本
+ 如果合并分支时，同时修改了同一个文件，会引发冲突，需要协商
+ Master分支应该非常稳定，用来发布新版本，一般情况下不允许在上面进行操作

## 5、Git项目搭建

### 本地仓库搭建

**1. 使用 Finder 显示隐藏文件**

在 Finder 中，你可以通过快捷键显示隐藏文件：

​	•	打开 Finder。

​	•	按下快捷键 Command + Shift + .（句号键）。

这将显示隐藏文件和文件夹（包括 .git 文件夹）。再次按 Command + Shift + . 可以隐藏它们。

~~~bash
#第一种方法：进入项目的根目录，键入git init，会创建一个.git文件夹
git init

#第二种方法：克隆远程目录，将远程服务器上的仓库完全镜像一份至本地
git clone [url]
~~~

## 6、Git 文件操作

### 文件的四种状态

+ **未跟踪**：文件已经在文件夹中，但是还没有加入git仓库，通过**git add**状态变为 **staged**

+ **未修改**：文件已经入库，且与项目文件内容一致。被修改，文件状态变为 **已修改**，如果使用 **git  rm** 移出仓库，则变为**未跟踪**。

+ **已修改**：文件已经修改。**git add --> 暂存状态；git checkout -->覆盖当前文件 --> 未修改。**

+ **暂存状态**：**git commit** --> 提交到仓库；**git reset HEAD filename** -->  取消暂存；

![image-20241015151937994](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242128823.png)



### 查看文件状态

~~~bash
#查看指定文件状态
git status [filename]

#查看所有文件状态
git status

# (base) chilianpan@chilianpandebijibendiannao gitcode % git status 
# 位于分支 master

# 尚无提交

# 未跟踪的文件:
#   （使用 "git add <文件>..." 以包含要提交的内容）
# 	.DS_Store
# 	hello.txt

# 提交为空，但是存在尚未跟踪的文件（使用 "git add" 建立跟踪）
~~~

### 修改文件状态

~~~bash
#添加所有文件到暂存区
git add .

# (base) chilianpan@chilianpandebijibendiannao gitcode % git status 
# 位于分支 master

# 尚无提交

# 要提交的变更：
#   （使用 "git rm --cached <文件>..." 以取消暂存）
# 	新文件：   .DS_Store
# 	新文件：   hello.txt







#提交暂存区的内容到本地仓库
#  -m  提交信息
git commit -m “消息内容”
例如：git commit -m "new file hello.txt"

# (base) chilianpan@chilianpandebijibendiannao gitcode % git commit -m "new file hello.txt"
# [master（根提交） cc11504] new file hello.txt
#  2 files changed, 1 insertion(+)
#  create mode 100644 .DS_Store
# #  create mode 100755 hello.txt
# (base) chilianpan@chilianpandebijibendiannao gitcode % git status                        
# 位于分支 master
# 无文件要提交，干净的工作区


~~~

### 忽略文件

+ 有时候不需要把所有的文件都纳入版本控制，例如数据库文件、临时文件、设计文件等

+ 在**主目录**下建立  **".gitignore"**  文件，该文件有以下规则：

  1.文件中的注释#号开头

  2.可以使用Linux通配符

  3.如果名称**最前面**有一个感叹号！，表示例外规则，将不被忽略

  4.如果名称的**最前面**是一个路径分隔符/，表示要忽略的文件在此目录下，而子目录中的文件夹不忽略

  5.如果名称的**最后面**是一个路径分隔符/，表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）

~~~bash
#为注释
#忽略所有的  .txt  结尾的文件，这样的话上传不会被选中
*.txt       

#但是lib.txt除外（lib.txt不会被忽略）
!lib.txt

#仅忽略项目根目录下的TODO文件，但是不包括其他目录temp(/在前，忽略前面)
/temp

#忽略build目录下的所有文件（/在后，忽略后面）
build/

#会忽略 doc/notes.txt 但是不包括 doc/server/arch.txt
doc/*.txt
~~~

## 7、使用Gitee或者Github

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

### 使用流程

+ 注册登录码云，完善个人信息

+ 设置**本机绑定SSH公钥**，实现免密码登录

  ~~~bash
  #在c盘用户目录下，新建一个.ssh文件夹
  #在git命令窗口键入命令，创建公钥
  ssh-keygen -t rsa
  ~~~

  此时，一直回车继续，直到.ssh文件夹下出现类似  id_rsa.pub 和 id_rsa 文件

  将.pub文件的内容拷贝到码云或者Github的SSH公钥里面，生成认证信息

+ 使用Gitee或者Github新建一个仓库

  直接在Gitee或者Github新建一个远程仓库即可，将远程仓库克隆到本机

  ~~~bash
  git clone [url]
  ~~~

  **此处克隆的时候如果报错，例如...127.0.0.1  1136......，可能是你的git使用了代理，删除代理就好了**

  ~~~bash
  #删除代理
  git config --global --unset http.proxy
  ~~~


## 8、bash和zsh的区别

Zsh 和 Bash 都是非常强大的 shell，它们之间的选择取决于个人喜好和特定的使用场景。下面是一些关于它们之间区别和优势的点：

### 8.1 用户友好性:

Zsh:
Zsh 提供了更好的自动补全功能和提示，这对于新手用户来说非常有帮助。
Zsh 有丰富的提示符配置和主题选项，比如通过 Oh My Zsh 提供的主题。
Zsh 的语法较为宽松，容易理解和使用。

Bash:
Bash 的自动补全和提示功能相对较为基础。
Bash 的提示符配置相对较少。

### 8.2 兼容性:

Zsh:
Zsh 尽管相对现代，但在某些老的或者定制的系统上可能不可用。

Bash:
Bash 是许多系统的默认 shell，具有很高的兼容性。

### 8.3 功能和插件:

Zsh:
Zsh 有丰富的插件和主题，通过 Oh My Zsh 等框架可以轻松安装和管理。
Zsh 提供了一些高级功能，如拼写检查和更好的数组操作。

Bash:
Bash 的功能较为基础，但它执行基本任务非常高效且可靠。

### 8.4 社区和支持:

Zsh:
Zsh 有一个活跃的社区，特别是 Oh My Zsh 社区，提供了大量的插件和主题。

Bash:
Bash 由于其悠久的历史和广泛的使用，拥有庞大的用户基础和社区支持。

### 8.5 性能:

两者在性能上的差异不大，但在处理某些特定任务时，其中一个可能比另一个快一些。
总的来说，如果你喜欢尝试新的功能，优化你的 shell 环境，或者是新手用户，你可能会喜欢 Zsh 和 Oh My Zsh 提供的功能。但如果你喜欢保持简单，或者在一个保守的或受限的环境中工作，Bash 可能是一个更好的选择。

[切换bash和zsh](https://blog.csdn.net/wangzhongshun/article/details/108875351?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522962AC365-7709-4ECB-99B0-1FF3DC018CB9%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=962AC365-7709-4ECB-99B0-1FF3DC018CB9&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-108875351-null-null.142^v100^control&utm_term=Mac切换zsh和bash&spm=1018.2226.3001.4187)

## 9、mac配置免密登陆github

[Mac免密登录github](https://blog.csdn.net/weixin_44557056/article/details/125379580)

### 三、具体配置

**1. 配置全局的用户名和邮箱（不是必须）**

```shell
git config --global user.name "xxx"
git config --global user.email "xxx.com"

```

**2. 打开命令行终端,验证是否有ssh keys,看下返回的结果中是否已经存在了.pub结尾的文件**

```bash
ls -alh ~/.ssh

```

如果有.pub结尾的文件直接打开，复制到github上的SSH keys，如果没有就继续执行



**2. 使用如下命令生成ssh-keygen密钥,然后一路回车。其中，“邮箱地址”是你的github关联的邮箱。**

```bash
ssh-keygen -t rsa -C "邮箱地址"
```

**执行以下命令查看公钥内容，打开id_rsa.pub文件，复制此内容**

```bash
cat ~/.ssh/id_rsa.pub
```

**3. 点击账户头像后的下拉三角，选择’settings’。**

<img src="https://raw.githubusercontent.com/panger23/TyporaImages/master/java/202410171029158.png?token=AUPWMYATRVW7DJP3D5IQK7LHCB3OS" alt="image-20241017102957931" style="zoom:50%;" />

**6. 验证GitHub是否链接**

```bash
ssh -T git@github.com
```

## 10、文件上传到git

要把你在另一个文件夹中的笔记上传到 GitHub，可以按照以下步骤操作：



**1. 初始化本地 Git 仓库**



如果你还没有在该文件夹下初始化 Git 仓库，需要先进入该文件夹并初始化：



```
cd /path/to/your/notes-folder # 进入笔记文件夹路径

git init # 初始化 Git 仓库
```



**2. 添加文件到 Git 仓库**



在初始化仓库后，添加你的笔记文件到 Git 追踪范围：



```
git add . # 添加该文件夹下的所有文件
```



如果你只想添加特定文件，可以替换 . 为你要添加的文件名。



**3. 提交更改**



添加文件后，使用以下命令提交更改：



```
git commit -m "添加笔记文件"
```



**4. 将本地仓库连接到 GitHub 仓库**



你需要在 GitHub 上创建一个新的仓库，然后将该仓库的 URL 添加到你的本地仓库中。假设你的 GitHub 仓库地址是 https://github.com/yourusername/your-repo.git。



```
git remote add origin https://github.com/yourusername/your-repo.git
```



**5. 推送到远程仓库**



最后，将你本地的更改推送到 GitHub：



```
git push -u origin master
```



这将把你所有的笔记文件推送到 GitHub 的 master 分支。



**如果你的 GitHub 仓库已经有内容**



如果你在推送时遇到和之前一样的拒绝问题（因为远程仓库已经有一些提交），你可以先拉取远程仓库的内容再推送：

```

git pull origin master # 先拉取远程仓库内容

git push -u origin master # 推送本地内容
```



这样，你的笔记文件就会成功上传到 GitHub。
