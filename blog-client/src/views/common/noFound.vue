<template>
  <a-empty :style="{transform: 'translateY(200px)'}" description="对不起, 没有找到该页面"/>
</template>

<script>
import { Empty} from 'ant-design-vue'
  export default {
    components: {AEmpty:Empty},
     setup() {
      
      return {

      }
    }
  }
</script>

<style scoped lang="scss">

</style>