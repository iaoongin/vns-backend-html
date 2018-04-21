<template lang="html">
  <div class="detail">
    <detail-header></detail-header>
    <p class="site-title">{{$route.params.title}}</p>
    <p class="site-cont">{{$route.params.price}}</p>
    <common-footer></common-footer>
  </div>
</template>
<script>
  import DetailHeader from '../components/detailHeader'
  import CommonFooter from '../components/commonFooter'

  export default {
    data() {
      return {}
    },
    components: {DetailHeader, CommonFooter}
  } </script>
<style lang="css">
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }

  .detail > img {
    display: block;
    width: 80%;
    margin: 0 auto 0.5rem;
  }

  .detail > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }

  .detail > p.site-title {
    color: #ff8000;
  }

  .detail > p.site-cont {
    color: #666;
    font-size: 0.9rem;
  } </style>

