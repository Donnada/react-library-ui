# create ui-library

---

该项目使用到：

1. react 前端框架
2. vite
3. storybook 构建ui组件并测试
4. redux 
5. jest 
6. rollup打包项目
6. sass/less更有效编写代码和维护



途径:

1. 部署组件库
2. 创建并测试组件
3. 合成并测试复杂组件
4. 发布开源组件库

---




## FAQ
1. 如何配置.npmrc? 在windows11下

无法使用vim/nano；先找到.npmrc的位置，再使用code .npmrc即可

2. 如何使用npm login;需要小写用户名；但本人的github用户名是大写的；让我非常尴尬？

利用命令行：npm set "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" 使用令牌方式登录

3. Git：error: remote origin already exists

利用命令行删除 git remote rm origin，然后在关联自己的github即可



---



### 我想写一个组件库，但过程中遇到了几个问题。



1. 写出了一个组件，如何测试？
   使用storybook如何测试？



---



### 在学习storybook中顺带学习一下react的语法

1. ...Default.args.tasks.slice(0,5)这个是什么意思?

选取default的参数的tasks的第0到5个元素

2. 



---

### 在react关于css的编写

1. .btn{}; .btn a{};.btn:hover a{};.btn a:before{};.btn:hover a::before{};.btn::before{};.btn:hover::before{};.btn::after{};.btn:hover::after{};.btn:nth-child()::before,.btn:nth-child()::after{}如何融入起来？

   使用预处理器（less/sass）

2. less和sass有什么区别？

   他们是预处理器提供了扩展css的功能，变量，嵌套，混合，函数等

3. 如何实现在Storybook中使用Sass并实现在修改args时自动编译Sass文件？（暂时未能实现全局配置引入scss）



