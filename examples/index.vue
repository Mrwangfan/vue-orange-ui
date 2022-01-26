<!--
 * @Author: fan wang
 * @Date: 2022-01-26 09:49:27
 * @LastEditTime: 2022-01-26 10:19:39
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-orange-ui\examples\index.vue
-->
<template>
  <div>
    <example-show
      v-for="(item, index) in exampleList"
      :key="index"
      :name="item"
    ></example-show>
  </div>
</template>
<script>
import ExampleShow from './example/show';
export default {
  data () {
    return {
      exampleList: ['CldTest']
    };
  },
  components: {
    ExampleShow
  }
};
</script>
<style lang="scss">
body,
html {
  margin: 0px;
  padding: 0;
}
</style>
