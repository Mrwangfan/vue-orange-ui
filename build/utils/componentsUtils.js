/*
 * @Author: fan wang
 * @Date: 2022-01-26 09:54:55
 * @LastEditTime: 2022-01-26 10:12:58
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-orange-ui\build\utils\componentsUtils.js
 */
const fn = () => {
  const fs = require('fs');
  const __dir = './src/components';
  const dir = fs.readdirSync(__dir);
  const path = require('path');
  const changePath = (file) => { // 对路径进行转化处理
    let re = file;
    if (file.indexOf('..') === 0) {
      re = file.replace('..', '.');
    }
    re = re.replace('\\', '/').replace('\\', '/').replace('\\', '/');
    return `./${re}`;
  };
  const components = {};
  components.index = './src/index.js';
  const fileNameToLowerCase = (fileName) => {
    const re = fileName.replace(/([A-Z])/g, '-$1').toLowerCase();
    return re[0] === '-' ? re.slice(1) : re;
  };
  // const commonImport = fs.readFileSync('./src/common.js')
  dir.forEach((fileName) => {
    const filePath = path.join(__dir, `/${fileName}`);
    const indexPath = path.join(filePath, '/index.vue');
    const hasIndex = fs.existsSync(indexPath);
    if (!hasIndex) {
      console.error(`error: ${filePath}文件夹不存在index.vue文件, 无法打包`);
      return;
    }
    components[fileNameToLowerCase(fileName)] = changePath(filePath); // 生成一个多入口对象
    const indexContent = `import Component from './index.vue';
    Component.install = (Vue) => {
      Vue.component('${fileName}', Component);
    };
    export default Component;`;
    fs.writeFileSync(path.join(filePath, '/index.js'), indexContent); // 为src/components下的每一个文件夹注入一个index.js文件并写入以上内容
  });
  delete components.app;
  fs.writeFileSync('./components.json', JSON.stringify(components, null, 2));
};
module.exports = fn;
