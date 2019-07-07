<template>
  <div id="app">
    <Header id="header"></Header>
    <Nav></Nav>
    <right></right>
    <main id="main">
      <router-view/>   
    </main>
    <Footer id="footer"></Footer>
     
  </div>
</template>


<script>

import Header from '@/components/header'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Right from '@/components/right'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Nav,
    Right
  }
}
</script>

<style lang="less">
 
@import "./assets/common.less";

#app {
  display: grid;
  grid-template-columns: 15% auto 15%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header"
                       "nav    main   right"
                       "footer footer footer";

  #header {
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }

  #nav{
    grid-area: nav;
  }

  #right{
    grid-area: right;
  }

  #main {
    grid-area: main;
    background-color: @themeLighterColor;
  }

  #footer {
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }

}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 10px auto 10px;

    #header, #footer {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

}



</style>
