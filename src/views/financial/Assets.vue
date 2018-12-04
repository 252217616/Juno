<template>

  <div class="assets">
     <transition name="fade" >
        <div v-show="analy">
          <table class="table table-bordered table-hover table-striped">
            <thead>
              <tr style="background-color:#9AFF9A">
                <th class="tac" style="width:10%">序号</th>
                <th class="tac" style="width:20%">科目</th>
                <th class="tac" style="width:20%">{{getDate(2)}}</th>
                <th class="tac" style="width:20%">{{getDate(1)}}</th>
                <th class="tac" style="width:20%">{{getDate(0)}}</th>
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
            <el-button type="success" @click="submit()" round>提交分析</el-button>
            <el-button type="danger" @click="reset()" round>重置</el-button>
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
                  偿债能力分析<i class="header-icon el-icon-info"></i>
                </template>
                <div>
                  <table class="table table-bordered table-hover table-striped">
                      <thead>
                        <tr>
                          <th class="tac" style="width:10%">指标名称</th>
                          <th class="tac" style="width:20%">{{getDate(2)}}</th>
                          <th class="tac" style="width:20%">{{getDate(1)}}</th>
                          <th class="tac" style="width:20%">{{getDate(0)}}</th>
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
                        {{repay.name}}<i class="header-icon el-icon-info"></i>
                      </template>
                      <div>计算公式：{{repay.formula}}</div>
                      <div>{{repay.analys}}</div>
                    </el-collapse-item>
                  </el-collapse>
                </div>
              </el-collapse-item>
                        <el-collapse-item>
                <template slot="title">
                  营运能力分析<i class="header-icon el-icon-info"></i>
                </template>
                <div>
                  <table class="table table-bordered table-hover table-striped">
                      <thead>
                        <tr>
                          <th class="tac" style="width:10%">指标名称</th>
                          <th class="tac" style="width:20%">{{getDate(2)}}</th>
                          <th class="tac" style="width:20%">{{getDate(1)}}</th>
                          <th class="tac" style="width:20%">{{getDate(0)}}</th>
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
                        {{operate.name}}<i class="header-icon el-icon-info"></i>
                      </template>
                      <div>计算公式：{{operate.formula}}</div>
                      <div>{{operate.analys}}</div>
                    </el-collapse-item>
                  </el-collapse>
                </div>
              </el-collapse-item>
                        <el-collapse-item>
                <template slot="title">
                  盈利能力分析<i class="header-icon el-icon-info"></i>
                </template>
                <div>
                  <table class="table table-bordered table-hover table-striped">
                      <thead>
                        <tr>
                          <th class="tac" style="width:10%">指标名称</th>
                          <th class="tac" style="width:20%">{{getDate(2)}}</th>
                          <th class="tac" style="width:20%">{{getDate(1)}}</th>
                          <th class="tac" style="width:20%">{{getDate(0)}}</th>
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
                        {{profit.name}}<i class="header-icon el-icon-info"></i>
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
      profitList:[]
    };
  },
  methods: {
    save() {
      sessionStorage.setItem("assets", lu);
    },
    test(){
      console.log(this.list);
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
    },
    submit () {
       postHttp("http://localhost:8320/juno/finance/analys",this.list).then(res => {
    
         if(res.data.status.substr(0,2) == "20"){
           alert("分析成功");
           this.repayList = res.data.result.repay;
           this.operateList = res.data.result.operate;
           this.profitList = res.data.result.profit;
           this.analy = false;
         }else {
           alert(res.data.message);
         }
      });
    },
    reback(){
      this.analy = true;
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
