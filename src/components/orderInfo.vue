
<template>
  <div
    class="kefu-orderinfo"
    v-loading="loading"
  >
    <div class="orderinfo-header">订单信息</div>
    <div class="orderinfo-main">
      <el-table
        :data="orderList"
        style="width: 100%"
      >
        <el-table-column
          label="订单号"
          prop="_id"
          width="220"
        ></el-table-column>
        <el-table-column
          label="订单状态"
        >
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.status }}</el-tag>
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
              v-if="scope.row.relation !== workOrderId"
              size="mini"
              icon="el-icon-share"
              @click="handleEdit(scope.row)">关联</el-button>
            <el-button
              v-if="scope.row.relation === workOrderId"
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)">取消关联</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import { mapActions } from 'vuex';
/* eslint-disable */
export default {
  name: 'order-info',
  data() {
    return {
      orderList: [],
      loading: false,
      workOrderId: this.$route.params.workOrderId
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    ...mapActions([
      'getOrderList',
      'relateOrder',
      'unrelateOrder',
    ]),
    getList() {
      this.loading = true;
      this.getOrderList().then((res) => {
        this.orderList = res.map((item) => {
          const date = moment(new Date(item.date * 1000)).format('YYYY-MM-DD');
          return Object.assign({}, item, {
            date,
          });
        });
        this.loading = false;
      }, (errmsg) => {
        this.$message.error(errmsg);
        this.loading = false;
      });
    },
    handleEdit(data) {
      this.relateOrder({
        orderId: data._id,
        workOrderId: this.$route.params.workOrderId,
      }).then(() => {
        this.$message.success('操作成功!');
        this.getList();
      }, (errmsg) => {
        this.$message.success(errmsg);
      })
    },
    handleDelete(data) {
      this.unrelateOrder({
        orderId: data._id,
      }).then(() => {
        this.$message.success('操作成功!');
        this.getList();
      }, (errmsg) => {
        this.$message.success(errmsg);
      })
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
