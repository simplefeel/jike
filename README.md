![](https://user-gold-cdn.xitu.io/2018/3/8/16204a5a018bc35c?w=368&h=709&f=png&s=174532)

# React Native 实例，从入门到深入学会 react-native 开发

> 本实例本人也是参考网上各种资源，一步步开发而来，目前功能还比较简单，但作为入门实例还是值得一看的，基本上能对 react-native 有一个基本的了解，我会从自身学习的角度上描述自己碰到的问题以及应对方案，希望能帮助到想学习 react-native 开发的童鞋。

## 目录

* [代码结构](#代码结构)
* [运行](#运行)
* [功能分解](#入门分解)
* [主要代码解析及踩坑实例](#主要代码解析及踩坑实例)
* [资源网站](#资源网站)

## 代码结构

![](https://user-gold-cdn.xitu.io/2018/3/8/1620498c3d183743?w=330&h=872&f=png&s=75201)

按照官网教程搭建好开发环境，通过 react-native init [项目名]可以初始化一个项目，以上截图是我的项目结构，在初始化的基础上我增加了 views 文件夹，里面主要用来存放页面、组件、工具函数等。工程根目录下 index.js 为入门文件，通过方法 AppRegistry.registerComponent("jike", () => App)注册，App 就是入口组件;

## 运行（Usage）

前提是已经搭建好 react-native 开发环境,终端进入项目根目录

1.  clone or download 项目
2.  安装依赖 `yarn install`
3.  运行命令 `react-native run-ios`

## 功能分解（逐步增加中）

目前实例主要实现的功能有：

* 底部 Tap 切换
* 顶部导航栏切换
* 上拉刷新
* 下拉加载
* ListView 长列表

## 踩坑实例

### 1.底部 Tap 切换 Icon 不显示的问题

这里用的是 react-navigation 组件，这个问题困扰了我大半天，一开始以为是使用方式有问题，参考网上各种资源都没发现写法有啥问题，后来还是直接去组件 github 提的 issue 才解决了我的问题，原来是 react-native 升级了，react-navigation 底部布局方式有问题导致，作者修复了组件，升级才好的，所以碰到这个问题，如果你 react-native>=0.54.0,直接将 react-navigation 升级到 1.5.0 即可。

### 2. 引入的 react-native-vector-icons 组件不生效的问题

这个问题网上也有很多人碰到类似的，解决方法很多，这里我自己的解决方法是：<br/>

1.  `npm install react-native-vector-icons --save`
2.  `react-native link react-native-vector-icons`
3.  打开 Xcode,将 fonts 添加到项目中，操作就是在 Xcode 中，点击项目-->右键 Add file to [项目名] -->找到项目中的 react-native-vector-icons 里面的 fonts 添加
4.  xcode 重新编译

## 资源网站

* [react-native 中文网站](https://reactnative.cn/docs/0.51/flatlist.html#refreshing)
* [react native 学习资源汇总](https://github.com/crazycodeboy/react-native-awesome/blob/master/README.md)

> 持续更新中....
