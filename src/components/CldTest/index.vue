<!--
 * @Author: fan wang
 * @Date: 2022-01-26 09:48:01
 * @LastEditTime: 2022-01-26 09:48:02
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-orange-ui\src\components\CldTest\index.vue
-->
<template>
  <div class="red">{{ test }}</div>
</template>
<script>
export default {
  data () {
    return {
      test: 'JS测试组件'
    };
  }
};
</script>
<style lang="scss" scoped>
.red {
  color: red;
}
</style>
