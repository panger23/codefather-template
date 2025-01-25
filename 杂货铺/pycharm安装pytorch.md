# pycharm安装pytorch

## 1、首先看自己python的版本

点开pycharm的右下角，看python解释器的版本。我的是**python3.9**

![image-20231101144005699](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301122.png)



**再看一下python解释器的安装位置**

我的是 ：F:\Annconda\Anaconda3

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301598.png" alt="image-20231101140536600" style="zoom:50%;" />



## 2、接下来下载Pytorch

**根据下面这个图选择自己可以下载的torch版本**
我的python解释器是**python3.9**，所有我可以下载1.13、1.12等版本的torch，我下载的是**1.13版本**

**torch-1.13.0+cpu-cp39-cp39-win_amd64.whl**

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301978.png" alt="image-20231101141051121" style="zoom:67%;" />



<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301676.png" alt="image-20231101140950642" style="zoom:67%;" />

打开后面的网页，对.whl文件直接进行下载：https://download.pytorch.org/whl/torch_stable.html
**我下载的是：torch-1.13.0+cpu-cp39-cp39-win_amd64.whl**

要记住下载**结尾是xxxwin_amd64.whl**的。

![image-20231101141317694](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301660.png)

## 3、下载完成后把下载的文件复制到这里

复制到python解释器的文件夹里面的**Scripts文件夹**下面。

比如我都的python解释器在**F:\Annconda\Anaconda3**，我就复制到**F:\Annconda\Anaconda3\Scripts**

![image-20231101141715766](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301516.png)

**复制到F:\Annconda\Anaconda3\Scripts文件夹下面**

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301090.png" alt="image-20231101141856599" style="zoom:67%;" />

## 4、使用pip命令安装

**'win+r' 输入cmd**

![image-20231101142817508](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301766.png)

**打开这个文件夹F:\Annconda\Anaconda3\Scripts文件夹**

![image-20231101143020990](https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301997.png)

**输入命令：pip install torch-1.13.0+cpu-cp39-cp39-win_amd64.whl**

<img src="https://panger-1330565050.cos.ap-beijing.myqcloud.com/202501242301819.png" alt="image-20231101143317699" style="zoom: 80%;" />

等待安装完成即可，只要pychram里面的torch不标红，说明可以使用。



