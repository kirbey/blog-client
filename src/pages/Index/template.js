import request from '@/helpers/request.js'
window.request = request

import auth from '@/api/auth.js'
window.auth = auth

import blog from '@/api/blog.js'
window.blog = blog

export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick1() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    }
  }
}