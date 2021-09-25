<template>
  <div>
    <BViewHeader :config="showIndexViewConfig" />
    <router-view></router-view>
  </div>
</template>

<script>
import BViewHeader from '@blocks/viewHeader.vue';
import {showIndexViewConfig} from '@view-provider/show/index.js'
export default {
  components: { BViewHeader },
  setup(){
    return {
      showIndexViewConfig
    }
  }
};
</script>

<style lang="scss" scoped>
</style>