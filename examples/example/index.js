/*
 * @Author: fan wang
 * @Date: 2022-01-26 09:50:21
 * @LastEditTime: 2022-01-26 09:50:22
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-orange-ui\examples\example\index.js
 */
const requireComponent = require.context(
  '../example',
  true,
  /\w+\.vue$/
);
const examples = {};
requireComponent.keys().forEach((file) => {
  const name = `Example${file.replace('.vue', '').replace('./', '')}`;
  examples[name] = requireComponent(file).default;
});
export default examples;
