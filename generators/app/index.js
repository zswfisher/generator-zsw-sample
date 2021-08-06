/**
 * 此文件作为 generator 入口
 * 需要导出一个继承自 Yeoman Generator 的类型
 * Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些声明周期方法
 * 在这些方法中可以通过调用父类提供的一些方法实现功能，如：文件写入
 */

const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    // Yeoman 在文件生成阶段自动调用此方法
    // 此方法会往项目中写入文件
    // 通过 yarn link 将 generator-sample 注册到全局
    // 到需要写文件的目录下，执行:：yo sample 即可生成指定 temp.txt 文件
    // this.fs.write(this.destinationPath('temp.txt'), Math.random().toString())

    //根据模板创建文件
    // 在 generators/app 下创建 template 文件夹及模板文件

    // const from = this.templatePath('foo.txt')
    // const to = this.destinationPath('foo.txt')
    // const context = { title: 'hello zsw', success: true }
    // this.fs.copyTpl(from, to, context)

    // 用户输入生成模板
    const from = this.templatePath('bar.html')
    const to = this.destinationPath('bar.html')
    const context = this.answers
    this.fs.copyTpl(from, to, context)
  }
  prompting() {
    // Yeoman 在询问用户环节会自动调用此方法
    // 在此方法中可以调用父类的 prompt 方法发出对用户的命令行询问
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'you project name',
        default: this.appname // appname 为项目生成目录名称
      }
    ]).then(answers => {
      // answers => { name:'输入值' }
      this.answers = answers
    })
  }
}

