<template>
  <div>
    <BViewHeader :config="showIndexViewConfig" />
    <div class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
   
  </div>
</template>

<script>
import BViewHeader from '@blocks/viewHeader.vue';
import { showIndexViewConfig } from '@view-provider/show/index.js';
export default {
  components: { BViewHeader },
  setup() {
   
  
    return {
      showIndexViewConfig,
     
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 50vw;
  margin: 0 auto;
}

</style>