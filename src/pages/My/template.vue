<template>
  <div id="my">
    <section class="my-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2018</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </router-link>

    </section>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
