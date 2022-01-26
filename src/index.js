/*
 * @Author: fan wang
 * @Date: 2022-01-26 09:46:56
 * @LastEditTime: 2022-01-26 10:01:36
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-orange-ui\src\index.js
 */
const requireComponent = require.context(
  './components',
  true,
  /\w+\.vue$/
);
const list = requireComponent.keys().filter(item => {
  return item.endsWith('index.vue');
});

const componentsObj = {};

const componentsList = list.map((file) => {
  requireComponent(file).default.__file = file;
  const fileList = file.split('/');
  const defaultComponent = requireComponent(file).default;
  componentsObj[fileList[fileList.length - 2]] = defaultComponent;
  return defaultComponent;
});
const install = (Vue, options = {}) => {
  if (install.installed) return;
  componentsList.forEach((item) => {
    const fileList = item.__file.split('/');
    const name = fileList[fileList.length - 2];
    Vue.component(name, item);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
const exportObj = {
  install,
  ...componentsObj
};
export default exportObj;
