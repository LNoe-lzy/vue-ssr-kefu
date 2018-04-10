
<template>
  <div class="kefu-sidebar">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">我的工单</span>
        </template>
        <el-menu-item index="1-1">正在处理</el-menu-item>
        <el-menu-item index="1-2">我的历史</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">组内工单</span>
        </template>
        <el-menu-item index="2-1">待分配</el-menu-item>
        <el-menu-item index="2-2">处理中</el-menu-item>
        <el-menu-item index="2-3">待回复</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">紧急工单</span>
        </template>
        <el-menu-item index="3-1">20min未领取</el-menu-item>
        <el-menu-item index="3-2">2h未领取</el-menu-item>
        <el-menu-item index="3-3">三个月未关闭</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-circle-plus-outline"></i>
        <span slot="title">新建工单</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">查询工单</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
  },
};
</script>
<style lang="less">
.kefu-sidebar {
  width: 200px;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: calc(100vh - 60px);
  }
}
</style>
