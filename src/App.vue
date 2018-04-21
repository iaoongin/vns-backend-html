<template>
  <el-container id="app" class="main">
    <el-aside width="210px">
      <dash-asider class="asider"></dash-asider>
    </el-aside>
    <el-main>
      <transition name="el-fade-in-linear">
          <router-view class="rv"/>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
  import DashAsider from './components/DashAsider';
  import ArchitectureInfo from './components/ArchitectureInfo';
  import LogInfo from './components/LogInfo';

  export default {
    name: 'App',
    components: {
      DashAsider, ArchitectureInfo, LogInfo
    }
  }
</script>

<style>
  .main {
    width: 100%;
  }

  .asider {
    margin-top: 1rem;
  }

  .rv {
    min-height: 38rem;
    /*overflow: scroll;*/
  }
</style>
