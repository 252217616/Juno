<template>

  <div class="assets" >
     <transition name="fade" >
        <div v-show="analy">
          <table class="table table-bordered table-hover table-striped">
            <thead>
              <tr style="background-color:#9AFF9A">
                <th class="tac" style="width:10%">序号</th>
                <th class="tac" style="width:20%">科目</th>
                <th class="tac" style="width:20%">{{getDate(0)}}</th>
                <th class="tac" style="width:20%">{{getDate(1)}}</th>
                <th class="tac" style="width:20%">{{getDate(2)}}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="gradeA trt tac" v-for="i in list " :key="i.no" >
                  <td style="vertical-align:middle;" >{{i.no}}</td>
                  <td style="vertical-align:middle;" >{{i.name}}</td>
                  <td ><input type="text" class="form-control" v-model="i.before"> </td>
                  <td ><input type="text" class="form-control" v-model="i.mid"> </td>
                  <td ><input type="text" class="form-control" v-model="i.after"> </td>
              </tr>
            </tbody>
          </table>
          <div class="center">
            <el-button type="success" @click="submit()" round v-loading.fullscreen.lock="loading">提交分析</el-button>
            <el-button type="danger" @click="reset()" round>重置</el-button>
            <!-- <el-button type="danger" @click="test()" round>测试</el-button> -->
          </div>
          <div style="height:30px">
            
          </div>
        </div>
      </transition> 
      <transition name="fade" >
        <div v-show="!analy">
          <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">
                  <i class="header-icon el-icon-goods">&nbsp;&nbsp;</i>偿债能力分析 &nbsp;&nbsp;
                </template>
                <div>
                  <table class="table table-bordered table-hover table-striped">
                      <thead>
                        <tr>
                          <th class="tac" style="width:10%">指标名称</th>
                          <th class="tac" style="width:20%">{{getDate(0)}}</th>
                          <th class="tac" style="width:20%">{{getDate(1)}}</th>
                          <th class="tac" style="width:20%">{{getDate(2)}}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="gradeA trt tac" v-for="repay in repayList" :key="repay.no"> 
                            <td style="vertical-align:middle;" >{{repay.name}}</td>
                            <td style="vertical-align:middle;" >{{repay.before}}</td>
                            <td style="vertical-align:middle;" >{{repay.mid}}</td>
                            <td style="vertical-align:middle;" >{{repay.after}}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div>
                  <el-collapse accordion>
                    <el-collapse-item style="background: red" v-for="repay in repayList" :key="repay.no">
                      <template slot="title">
                        <i class="header-icon el-icon-edit"></i>&nbsp;&nbsp;{{repay.name}}&nbsp;&nbsp;<i class="header-icon el-icon-edit"></i>
                      </template>
                      <div>计算公式：{{repay.formula}}</div>
                      <div>{{repay.analys}}</div>
                    </el-collapse-item>
                  </el-collapse>
                </div>
              </el-collapse-item>
                        <el-collapse-item>
                <template slot="title">
                 <i class="header-icon el-icon-tickets"></i>&nbsp;&nbsp;营运能力分析
                </template>
                <div>
                  <table class="table table-bordered table-hover table-striped">
                      <thead>
                        <tr>
                          <th class="tac" style="width:10%">指标名称</th>
                          <th class="tac" style="width:20%">{{getDate(0)}}</th>
                          <th class="tac" style="width:20%">{{getDate(1)}}</th>
                          <th class="tac" style="width:20%">{{getDate(2)}}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="gradeA trt tac" v-for="operate in operateList" :key="operate.no"> 
                            <td style="vertical-align:middle;" >{{operate.name}}</td>
                            <td style="vertical-align:middle;" >{{operate.before}}</td>
                            <td style="vertical-align:middle;" >{{operate.mid}}</td>
                            <td style="vertical-align:middle;" >{{operate.after}}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div>
                  <el-collapse accordion>
                    <el-collapse-item  v-for="operate in operateList" :key="operate.no">
                      <template slot="title">
                        <i class="header-icon el-icon-edit"></i>&nbsp;&nbsp;{{operate.name}}&nbsp;&nbsp;<i class="header-icon el-icon-edit"></i>
                      </template>
                      <div>计算公式：{{operate.formula}}</div>
                      <div>{{operate.analys}}</div>
                    </el-collapse-item>
                  </el-collapse>
                </div>
              </el-collapse-item>
                        <el-collapse-item>
                <template slot="title">
                 <i class="header-icon el-icon-news"></i> &nbsp;&nbsp;盈利能力分析
                </template>
                <div>
                  <table class="table table-bordered table-hover table-striped">
                      <thead>
                        <tr>
                          <th class="tac" style="width:10%">指标名称</th>
                          <th class="tac" style="width:20%">{{getDate(0)}}</th>
                          <th class="tac" style="width:20%">{{getDate(1)}}</th>
                          <th class="tac" style="width:20%">{{getDate(2)}}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="gradeA trt tac" v-for="profit in profitList" :key="profit.no"> 
                            <td style="vertical-align:middle;" >{{profit.name}}</td>
                            <td style="vertical-align:middle;" >{{profit.before}}</td>
                            <td style="vertical-align:middle;" >{{profit.mid}}</td>
                            <td style="vertical-align:middle;" >{{profit.after}}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div>
                  <el-collapse accordion>
                    <el-collapse-item  v-for="profit in profitList" :key="profit.no">
                      <template slot="title">
                        <i class="header-icon el-icon-edit"></i>&nbsp;&nbsp;{{profit.name}}&nbsp;&nbsp;<i class="header-icon el-icon-edit"></i>
                      </template>
                      <div>计算公式：{{profit.formula}}</div>
                      <div>{{profit.analys}}</div>
                    </el-collapse-item>
                  </el-collapse>
                </div>
              </el-collapse-item>
            
            </el-collapse>
            <br/>
            <div class="center">
            <el-button type="success" @click="reback()" round>返回</el-button>
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
import {postHttp} from "@/assets/js/ajax"


export default {
  name: "assets",
  data() {
    return {
      analy: true,
      list: [
        {
          no: 1,
          name: "货币资金",
          before: "",
          mid: "",
          after: "",
          type:false
        },
        {
          no: 2,
          name: "应收票据",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 3,
          name: "应收账款",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 4,
          name: "其他应收款",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 5,
          name: "存货",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 6,
          name: "流动资产合计",
          before: "",
          mid: "",
          after: "",
          type:true
        },
         {
          no: 7,
          name: "非流动资产合计",
          before: "",
          mid: "",
          after: "",
          type:true
        },
         {
          no: 8,
          name: "资产总计",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 9,
          name: "短期借款",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 10,
          name: "应付票据",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 11,
          name: "应付帐款",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 12,
          name: "其他应付款",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 13,
          name: "一年内到期的长期负债",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 14,
          name: "流动负债合计",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 15,
          name: "非流动负债合计",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 16,
          name: "长期债权投资",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 17,
          name: "负债总计",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 18,
          name: "所有者权益（或股东权益）合计",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 19,
          name: "主营业务收入",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 20,
          name: "主营业务成本",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 21,
          name: "财务费用",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 22,
          name: "营业费用",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 23,
          name: "管理费用",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 24,
          name: "利润总额",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 25,
          name: "所得税",
          before: "",
          mid: "",
          after: "",
          type:false
        },
         {
          no: 26,
          name: "净利润",
          before: "",
          mid: "",
          after: "",
          type:false
        }
      ],
      repayList:[],
      operateList:[],
      profitList:[],
      loading: false
    };
  },
  methods: {
    save() {
      sessionStorage.setItem("assets", lu);
    },
    getDate(num){
      var data = new Date();
      var year = data.getFullYear()-num;
      return year;
    },
    reset(){
      for(var i in this.list){
        this.list[i].before = "";
        this.list[i].mid = "";
        this.list[i].after = "";
      }
      this.$message('重置完毕！');
    },
    test(){
      for(var i in this.list){
        this.list[i].before = 1;
        this.list[i].mid = 1;
        this.list[i].after = 1;
      }
      this.$message('填写完毕！');
    },
    submit () {
      var reg = /^(-?\d+)(\.\d+)?$/;
      for(var i in this.list){
        if(!reg.test(this.list[i].before)||!reg.test(this.list[i].mid)||!reg.test(this.list[i].after)){
          this.rightOpen(this.list[i].name);
          return;
        }
      }

      this.loading = true;
       //postHttp("http://39.105.116.107/juno/finance/analys",this.list).then(res => {
       postHttp("http://localhost:8320/juno/finance/analys",this.list).then(res => {
         if(res.data.status.substr(0,2) == "20"){
           
            this.repayList = res.data.result.repay;
            this.operateList = res.data.result.operate;
            this.profitList = res.data.result.profit;
            this.analy = false;
            this.$message({
              message: '恭喜!分析成功！',
              type: 'success'
            });
         }else {
           this.$message.error('错误!'+res.data.message);
         }
      });
      this.loading = false;
    },
    reback(){
      this.analy = true;
    },
    rightOpen(name) {
        this.$notify({
          title: '错误',
          message: '【'+name+'】 科目数据未填写或填写错误！若无数据请填0。',
          position: 'bottom-right',
          type: 'warning'
        });
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tac {
  text-align: center;
  
}
</style>
