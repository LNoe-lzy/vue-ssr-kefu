
<template>
  <div class="kefu-orderinfo">
    <div class="orderinfo-header">订单信息</div>
    <div class="orderinfo-main">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          label="订单号"
          prop="orderId"
        ></el-table-column>
        <el-table-column
          label="订单状态"
        >
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.status }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="更新时间"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="250"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-share"
              @click="handleEdit(scope.$index, scope.row)">关联</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">取消关联</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order-info',
  data() {
    return {
      tableData: [{
        orderId: '1',
        date: '2016-05-02',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1518 弄',
        level: '1',
        status: '处理中',
      }, {
        orderId: '2',
        date: '2016-05-04',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1517 弄',
        level: '1',
        status: '处理中',
      }, {
        orderId: '3',
        date: '2016-05-01',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1519 弄',
        level: '2',
        status: '处理中',
      }, {
        orderId: '4',
        date: '2016-05-03',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1516 弄',
        level: '1',
        status: '处理中',
      }, {
        orderId: '5',
        date: '2016-05-01',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1519 弄',
        level: '2',
        status: '处理中',
      }, {
        orderId: '6',
        date: '2016-05-03',
        name: 'lizongyuan',
        address: '上海市普陀区金沙江路 1516 弄',
        level: '1',
        status: '处理中',
      }],
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>
<style lang="less">
.kefu-orderinfo {
  width: 50%;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  margin-left: 15px;
  .orderinfo-header {
    border-bottom: 1px solid #ebebeb;
    padding: 15px;
    font-size: 16px;
    color: #303133;
    font-weight: 500;
  }
  .orderinfo-main {
  }
}
</style>
