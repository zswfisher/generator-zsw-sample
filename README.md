// 1、项目管理流程

// 打开终端进入对应项目目录
// 创建忽略文件
echo node_modules > .gitignore
//初始化git
git init
// 查看文件状态
git status
// 添加文件跟踪
git add .
// 提交
git commot -m "first commit"
// github上创建好仓库，连接远端，“origin”为仓库别名
git remote add origin https://github.com/zswfisher/generator-zsw-sample.git
// 推送到远端 master 分支
git push -u origin master


// 2、发布 npm/yarn 流程

// 打开终端进入对应项目目录
// yarn publish
