
<template>
  <header class="kefu-header">
    <div class="header-logo">vue ssr kefu</div>
    <div class="header-wrapper">
      <div class="header-handler"></div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">lizongyuan</template>
          <el-menu-item index="2-1">注销</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect() {

    },
  },
};
</script>
<style lang="less">
.kefu-header {
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px #f0f1f2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  box-sizing: border-box;
  .header-logo {
    color: #409EFF;
    font-size: 20px;
    font-weight: 500;
    height: 60px;
    line-height: 60px;
    padding: 0 15px;
  }
  .header-wrapper {
    display: flex;
    flex: 1;
    .header-handler {
      flex: 1;
    }
  }
  .el-menu--horizontal {
    border-bottom: none;
  }
}
</style>
