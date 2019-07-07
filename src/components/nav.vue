<template>
  <div id="navStyle">
    <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航</span>
          </template>
          <el-menu-item-group>
              <router-link to="/">
                <el-menu-item index="1-1">主页</el-menu-item>
              </router-link>
              <router-link to="/my">
                <el-menu-item index="1-2">我的</el-menu-item>
              </router-link>
              <router-link to="/create">
                <el-menu-item index="1-3">写博客</el-menu-item>
              </router-link>
              <router-link to="/login">
                <el-menu-item index="1-4">登陆</el-menu-item>
              </router-link>
              <router-link to="/register">
                <el-menu-item index="1-5">注册</el-menu-item>
              </router-link>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
              <el-menu-item index="1-1"></el-menu-item>
          </el-menu-item-group>
          </el-submenu>
        </el-submenu>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</template>


<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
  #navStyle{
    width: 550px;
    background-color: #545c64;
  }
</style>
