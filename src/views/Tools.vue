<template>
  <div class="tools" >
    <div > 
      <el-row >
        <el-col :span="8" v-for="i in list" :key="i.name"> 
          <el-card :body-style="{ padding: '10px' }" shadow="hover" style="width:300px;">
            <div style="padding: 14px;">
              <span>{{i.name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{i.info}}</time>
                <el-button class="button" type="info" icon="el-icon-arrow-right" circle
                @click="openPage(i.url)"
                ></el-button>
              </div>
            </div>
          </el-card>
          <br/>
        </el-col>
      </el-row>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "tools",
  data() {
    return {
      list: [
        {
          name: "国家企业信用信息公示系统",
          url: "http://www.gsxt.gov.cn/index.html",
          info: "工商信息"
        },
        {
          name: "北京市企业信用信息网",
          url: "http://qyxy.baic.gov.cn/",
          info: "工商信息"
        },
        { name: "启信宝", 
          url: "https://www.qixin.com/", 
          info: "工商信息" 
        },
        {
          name: "中国裁判文书网",
          url: "http://wenshu.court.gov.cn/",
          info: "涉诉情况"
        },
        {
          name: "被执行人查询",
          url: "http://zhixing.court.gov.cn/search/",
          info: "老赖查询"
        },
        {
          name: "人民法院公告网",
          url: "https://rmfygg.court.gov.cn/",
          info: "法院公告"
        },
        {
          name: "中国债券信息网",
          url: "http://www.chinabond.com.cn/",
          info: "发债信息"
        },
        {
          name: "东方财富网",
          url: "http://www.eastmoney.com/",
          info: "上市公司"
        },
        {
          name: "中小企业股份转让查询",
          url: "http://www.neeq.com.cn/",
          info: "新三板公告"
        },
        {
          name: "银行间市场交易",
          url: "http://www.nafmii.org.cn/",
          info: "债券、PPN"
        },
        {
          name: "中登网",
          url: "https://www.zhongdengwang.org.cn/zhongdeng/index.shtml",
          info: "抵质押查询"
        },
         {
          name: "中国证券结算网",
          url: "http://www.chinaclear.cn/zdjs/gpzyshg/center_mzzbhg.shtml",
          info: "股权质押查询"
        }
      ],
      currentDate: new Date()
    };
  },
  methods: {
    openPage(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: auto;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.time {
  float: left;
  font-size: 13px;
  color: #999;
  margin-top: 13px;
  line-height: 12px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  float: right;
}
.tools {
  height: 800px;
}
</style>
