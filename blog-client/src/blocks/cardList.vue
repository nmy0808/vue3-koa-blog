<template>
  <div class="card-container">
    <a-card
      class="card"
      v-for="item in cardList"
      :key="item.id"
      :title="item.title"
      :extra="item.date"
      hoverable
    >
      <div>{{item.content}}</div>
    </a-card>
  </div>
</template>

<script>
export default {
  props: {
    cardList: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {},
};
</script>

<style lang="scss" scoped>
.card-container {
  padding-bottom: 20px;
}
.card {
  margin-bottom: 20px;
}

</style>