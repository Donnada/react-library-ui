# create ui-library


## FAQ
- 1. 如何配置.npmrc? 在windows11下
- 无法使用vim/nano；先找到.npmrc的位置，再使用code .npmrc即可
- 2. 如何使用npm login;需要小写用户名；但本人的github用户名是大写的；让我非常尴尬？
- 利用命令行：npm set "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" 使用令牌方式登录
- 3. Git：error: remote origin already exists
- 利用命令行删除 git remote rm origin，然后在关联自己的github即可