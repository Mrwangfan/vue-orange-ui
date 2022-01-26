/*
 * @Author: fan wang
 * @Date: 2022-01-26 09:50:41
 * @LastEditTime: 2022-01-26 09:50:41
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-orange-ui\examples\example\show.js
 */
import ExampleComponents from './index';
export default {
  components: {
    ...ExampleComponents
  },
  name: 'ExampleShow',
  props: ['name'],
  render (h) {
    return h(
      `example-${this.name}`
    );
  }
};
