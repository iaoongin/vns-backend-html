<template lang="html">
  <div class="container">
    <home-header></home-header> <!-- 展示引入的header组件 -->
    <div class="content">
      <ul class="cont-ul">
        <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <list v-for="item in items" :price="item.price" :title="item.title" :img="item.img" :key="item.title"></list>
      </ul>
    </div>
    <common-footer></common-footer> <!-- 展示引入的footer组件 --> </div>
</template>
<script>
  import HomeHeader from '@/components/homeHeader'
  import CommonFooter from '@/components/commonFooter'
  import List from '@/components/list'

  export default {
    data () {
      return {
        items: []   /* 定义一个空数组数据items */
      }
    },
    components: {
      HomeHeader,
      CommonFooter,
      List
    },
    created() {
      /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/goods')
        .then((data) => {
          /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
          this.items = data.body.data;
        })
    }

  }
</script>
<style lang="css" scoped> .head {
  width: 100%;
  height: 2rem;
}

.header {
  width: 100%;
  height: 2rem;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  border-bottom: 2px solid #ff8000;
}

.header h4 {
  width: 100%;
  text-align: center;
  line-height: 2rem;
  font-size: 1.4rem;
} </style>
