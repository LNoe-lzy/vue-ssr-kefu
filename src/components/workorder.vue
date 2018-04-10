
<template>
  <div class="kefu-workorder">
    <workorder-info />
    <order-info />
  </div>
</template>
<script>
import WorkorderInfo from './workorderInfo';
import OrderInfo from './orderInfo';

export default {
  components: {
    WorkorderInfo,
    OrderInfo,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="less">
.kefu-workorder {
  min-height: calc(100vh - 60px);
  flex: 1;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
}
</style>
