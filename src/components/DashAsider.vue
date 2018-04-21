<template>
  <el-row class="tac">
    <el-col :span="10" class="dash">
      <h5>VNS</h5>
      <el-menu router class="el-menu-vertical-demo" default-active="personalInfo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>业务</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="personalInfo">
              用户管理
            </el-menu-item>
            <el-menu-item index="architectureInfo">建筑信息</el-menu-item>
            <el-menu-item index="commentInfo">评论</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-loading"></i>
            <span slot="title">其他</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="logInfo">日志</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>


</template>

<script>
  export default {
    name: "dash-asider"
  }
</script>

<style scoped>
  h5{
    text-align: center;
  }
  .dash {
    width: 13rem;
  }

  .dash ul {
    height: 35rem;
  }
</style>
