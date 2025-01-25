# Typora中如何修改字体颜色

[Typora](https://so.csdn.net/so/search?q=Typora&spm=1001.2101.3001.7020)界面用起来真的超级简洁好用，但是默认是不能修改字体颜色的，不过我们可以通过一些其他的方法来修改，这里介绍一种自己使用的方法：需要下载一个AutoHotKey的软件

### 下载[AutoHotKey](https://so.csdn.net/so/search?q=AutoHotKey&spm=1001.2101.3001.7020)

官方下载地址： https://autohotkey.com/download/ahk-install.exe

1.先`安装`AutoHotKey

2.`打开记事本`，把下面的内容复制粘贴进去：

```c
; 快捷增加字体颜色
; SendInput {Text} 解决中文输入法问题
 
#IfWinActive ahk_exe Typora.exe
{
    ; Ctrl+Alt+O 橙色
    ^!o::addFontColor("orange")
 
    ; Ctrl+Alt+R 红色
    ^!r::addFontColor("red")
 
    ; Ctrl+Alt+B 浅蓝色
    ^!b::addFontColor("cornflowerblue")
}
 
; 快捷增加字体颜色
addFontColor(color){
    clipboard := "" ; 清空剪切板
    Send {ctrl down}c{ctrl up} ; 复制
    SendInput {TEXT}<font color='%color%'>
    SendInput {ctrl down}v{ctrl up} ; 粘贴
    If(clipboard = ""){
        SendInput {TEXT}</font> ; Typora 在这不会自动补充
    }else{
        SendInput {TEXT}</ ; Typora中自动补全标签
    }
}

```

3.将文件保存为ahk后缀的文件，如AutoHotKey.ahk

4.双击运行

5.在Typora软件里按 Ctrl+Alt+B 添加浅蓝色， Ctrl+Alt+R 红色，按 Ctrl+\ 取消样式

注：

<font color='red'>（1）颜色快捷键可以在AutoHotKey.ahk脚本文件中修改</font>

<font color='red'>（2）也可以右键 AutoHotKey.ahk 脚本文件，点击Compile Script编译脚本成exe程序，就可以不用下载Autohotkey在其他电脑上运行了</font>

