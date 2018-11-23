<template>

  <div class="assets">
   <div>
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr style="background-color:#9AFF9A">
            <th class="tac" style="width:10%">序号</th>
            <th class="tac" style="width:20%">科目</th>
            <th class="tac" style="width:20%">前年数据</th>
            <th class="tac" style="width:20%">今年数据</th>
            <th class="tac" style="width:20%">明年数据</th>
          </tr>
        </thead>
        <tbody>
           <tr class="gradeA trt tac" v-for="i in list " :key="i.no" >
              <td style="vertical-align:middle;" >{{i.no}}</td>
              <td style="vertical-align:middle;" >{{i.name}}</td>
              <td ><input type="text" class="form-control" v-model="i.before"> </td>
              <td ><input type="text" class="form-control" v-model="i.now"> </td>
              <td ><input type="text" class="form-control" v-model="i.next"> </td>
           </tr>
         </tbody>

      </table>
      
   </div>
     
  </div>
</template>

<script>
export default {
  name: "assets",
  data() {
    return {
      msg: "",
      list: [
        {
          no: 1,
          name: "货币资金",
          before: "",
          now: "",
          next: ""
        },
        {
          no: 2,
          name: "交易性金融资产",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 3,
          name: "应收票据",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 4,
          name: "应收股利",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 5,
          name: "应收利息",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 6,
          name: "应收账款",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 7,
          name: "其他应收款",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 8,
          name: "预付账款",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 9,
          name: "应收补贴款",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 10,
          name: "存货",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 11,
          name: "待摊费用",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 12,
          name: "   一年内到期的长期债权投资",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 13,
          name: "其他流动资产",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 14,
          name: "流动资产合计",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 15,
          name: "长期股权投资",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 16,
          name: "长期债权投资",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 17,
          name: "长期投资合计",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 18,
          name: "固定资产净值",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 19,
          name: "工程物资",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 20,
          name: "在建工程",
          before: "",
          now: "",
          next: ""
        },
         {
          no: 21,
          name: "固定资产清理",
          before: "",
          now: "",
          next: ""
        }
      ]
    };
  },
  methods: {
    save() {
      sessionStorage.setItem("assets", lu);
    },
    test(){
      console.log(this.list);
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
