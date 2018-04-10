
<template>
  <div class="kefu-workorderinfo">
    <div class="workorderinfo-header">工单信息</div>
    <div class="workorderinfo-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类型">
          <el-radio-group v-model="form.type">
            <el-radio-button label="用户" value="1"></el-radio-button>
            <el-radio-button label="商家" value="2"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="form.name" placeholder="城市"></el-input>
        </el-form-item>
        <el-form-item label="问题类型">
          <el-input v-model="form.name" placeholder="问题类型"></el-input>
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
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>驳回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'workorder-info',
  data() {
    return {
      form: {
        type: '用户',
        name: '',
        level: '1',
        date: '',
        delivery: false,
        resource: '',
        desc: '',
      },
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
