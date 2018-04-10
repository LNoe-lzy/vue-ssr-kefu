
<template>
  <div class="kefu-task">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        label="优先级"
      >
        <template slot-scope="scope">
          <el-tag size="medium" type="danger" v-if="scope.row.level == 1">高</el-tag>
          <el-tag size="medium" type="warning" v-else>低</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="当前处理人"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="工单状态"
        prop="status"
      ></el-table-column>
      <el-table-column
        label="更新时间"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        workOrderId: '1',
        date: '2016-05-02',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1518 弄',
        level: '1',
        status: '处理中',
      }, {
        workOrderId: '2',
        date: '2016-05-04',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1517 弄',
        level: '1',
        status: '处理中',
      }, {
        workOrderId: '3',
        date: '2016-05-01',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1519 弄',
        level: '2',
        status: '处理中',
      }, {
        workOrderId: '4',
        date: '2016-05-03',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1516 弄',
        level: '1',
        status: '处理中',
      }, {
        workOrderId: '5',
        date: '2016-05-01',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1519 弄',
        level: '2',
        status: '处理中',
      }, {
        workOrderId: '6',
        date: '2016-05-03',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1516 弄',
        level: '1',
        status: '处理中',
      }],
    };
  },
  methods: {
    handleEdit(index, row) {
      this.$router.push({
        name: 'workorder',
        params: {
          workOrderId: row.workOrderId,
        },
      });
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style lang="less">
.kefu-task {
  min-height: calc(100vh - 60px);
  flex: 1;
  padding: 15px;
  box-sizing: border-box;
}
</style>
