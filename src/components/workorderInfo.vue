
<template>
  <div
    class="kefu-workorderinfo"
    v-loading="loading"
  >
    <div class="workorderinfo-header">工单信息</div>
    <div class="workorderinfo-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="城市">
          <el-input v-model="form.city" placeholder="城市"></el-input>
        </el-form-item>
        <el-form-item label="问题类型">
          <el-input v-model="form.type" placeholder="问题类型"></el-input>
        </el-form-item>
        <el-form-item label="工单主题">
          <el-input v-model="form.name" placeholder="工单主题"></el-input>
        </el-form-item>
        <el-form-item label="处理时间">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="优先级">
          <el-select v-model="form.level" placeholder="优先级">
            <el-option label="高" value="1"></el-option>
            <el-option label="低" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            v-if="form.status !== '2'"
            type="primary"
            @click="onSubmit"
          >保存</el-button>
          <el-button
            v-if="type === 'workorder' && form.status !== '2'"
            @click="onReject"
          >驳回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import { mapActions } from 'vuex';

export default {
  name: 'workorder-info',
  data() {
    return {
      form: {
        type: '',
        city: '',
        name: '',
        level: '1',
        date: '',
        desc: '',
        status: '',
      },
      type: this.$route.name,
      loading: false,
    };
  },
  mounted() {
    if (this.$route.name === 'workorder') {
      this.getData();
    }
  },
  methods: {
    ...mapActions([
      'createWorkOrder',
      'getWorkOrder',
      'updateWorkOrder',
    ]),
    getData() {
      this.loading = true;
      this.getWorkOrder({
        workOrderId: this.$route.params.workOrderId,
      }).then((res) => {
        this.form = {
          ...res,
          date: new Date(res.date * 1000),
        };
        this.loading = false;
      }, (errmsg) => {
        this.$message.error(errmsg);
        this.loading = false;
      });
    },
    onSubmit() {
      const params = {
        type: this.form.type,
        city: this.form.city,
        name: this.form.name,
        level: this.form.level,
        date: moment(this.form.date).format('X'),
        desc: this.form.desc,
      };
      if (this.$route.name !== 'workorder') {
        params.status = '1';
        this.createWorkOrder(params).then(() => {
          this.$message.success('操作成功!');
          this.$router.push({
            name: 'task',
          });
        }, (errmsg) => {
          this.$message.error(errmsg);
        });
      } else {
        params.workOrderId = this.$route.params.workOrderId;
        params.status = this.form.status;
        this.updateWorkOrder(params).then(() => {
          this.$message.success('操作成功!');
          this.getData();
        }, (errmsg) => {
          this.$message.error(errmsg);
        });
      }
    },
    onReject() {
      const params = {
        type: this.form.type,
        city: this.form.city,
        name: this.form.name,
        level: this.form.level,
        date: moment(this.form.date).format('X'),
        desc: this.form.desc,
        status: '2',
        workOrderId: this.$route.params.workOrderId,
      };
      this.updateWorkOrder(params).then(() => {
        this.$message.success('操作成功!');
        this.getData();
      }, (errmsg) => {
        this.$message.error(errmsg);
      });
    },
  },
};
</script>
<style lang="less">
.kefu-workorderinfo {
  width: 50%;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  .workorderinfo-header {
    border-bottom: 1px solid #ebebeb;
    padding: 15px;
    font-size: 16px;
    color: #303133;
    font-weight: 500;
  }
  .workorderinfo-main {
    padding: 15px 15px 0 15px;
  }
}
</style>
