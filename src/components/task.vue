
<template>
  <div class="kefu-task">
    <el-table
      :data="workOrderList"
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
        label="工单类型"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>类型: {{ scope.row.type }}</p>
            <p>主题: {{ scope.row.name }}</p>
            <p>描述: {{ scope.row.desc }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.type }}</el-tag>
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
/* eslint-disable */
import moment from 'moment';
import { mapState, mapActions } from 'vuex';
import { workOrderStatus } from '../config/config';

export default {
  asyncData({ store }) {
    return store.dispatch('getWorkOrderList');
  },
  computed: {
    ...mapState({
      workOrderList: state => state.workOrderList.map((item) => {
        const status = workOrderStatus[item.status];
        const date = moment(new Date(item.date * 1000)).format('YYYY-MM-DD');
        return Object.assign({}, item, {
          status,
          date,
        });
      }),
    }),
  },
  methods: {
    ...mapActions([
      'deleteWorkOrder'
    ]),
    handleEdit(index, row) {
      this.$router.push({
        name: 'workorder',
        params: {
          workOrderId: row._id,
        },
      });
    },
    handleDelete(index, row) {
      const that = this;
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.deleteWorkOrder({
          workOrderId: row._id,
        }).then(() => {
          that.$message.success('操作成功!');
          that.$store.dispatch('getWorkOrderList');
        }, (errmsg) => {
          that.$message.error(errmsg);
        })
      }).catch(() => {
        return;       
      });
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
