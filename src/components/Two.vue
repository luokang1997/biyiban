<template>
<div class="two">
  <input type="text" v-model.lazy="value">
    <ul>
      <li v-for="(item,index) in list " :key='index'>{{item}}</li>
    </ul>
    <button @click="change">按钮</button>
    <button id="firstBtn" @click="testClick()" ref="aa">{{testMsg}}</button>
    <h3 id="h" >{{testMsg}}</h3>
</div>
 
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value:'dawda',
      list:[ 
        '220','驱蚊器二','大二'
      ],
       testMsg:"原始值",
    }
  },
  mounted(){
  },
  methods:{

    change(){
      this.$set(this.list,2,'阿道夫')
    },
    testClick:function(){
      let that=this;
      that.testMsg="修改后的文本值";  //vue数据改变，改变dom结构
        that.$nextTick(function(){ n
      let domTxt=document.getElementById('h').innerText;  //后续js对dom的操作
     
     console.log(domTxt);  //输出可以看到vue数据修改后DOM并没有立即更新，后续的dom都不是最新的
   
      if(domTxt==="原始值"){
        console.log("文本data被修改后dom内容没立即更新");
      }else {
        console.log("文本data被修改后dom内容被马上更新了");
      }
     })
    }
  
  },
  directives: {
        // 指令名称
        dir1: {
            inserted(el) {
                // 指令中第一个参数是当前使用指令的DOM
                console.log(el);
                console.log(arguments);
                // 对DOM进行操作
                el.style.width = '200px';
                el.style.height = '200px';
                el.style.background = '#000';
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
