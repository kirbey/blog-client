
<template>
  <div id="edit">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input type="text" placeholder="请输入标题" v-model="title" maxlength="15" show-word-limit></el-input>
    <p class="msg">限15个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" placeholder="请输入简介" v-model="description" :autosize="{ minRows: 2, maxRows: 6}" maxlength="30" show-word-limit></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" v-model="content" :autosize="{ minRows: 4, maxRows: 30}" id="content" placeholder="请输入内容" maxlength="1000" show-word-limit></el-input>
    <p class="msg">限1000个字</p>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="../Edit/template.less" lang="less"></style>
