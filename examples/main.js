/*
 * @Author: fan wang
 * @Date: 2022-01-26 09:49:09
 * @LastEditTime: 2022-01-26 09:49:10
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-orange-ui\examples\mian.js
 */
import Vue from 'vue';
import Index from './index.vue';
import components from '../src';
Vue.config.productionTip = false;
Vue.use(components);
new Vue({
  render: h => h(Index)
}).$mount('#app');
