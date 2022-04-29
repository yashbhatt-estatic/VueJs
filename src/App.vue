<template>
  <div id="app">
    <Header v-if="authenticated === 'true'" />
    <router-view />
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue';
export default {
  components: { Header },
  name: 'App',
  data() {
    return {
      authenticated: localStorage.getItem('authenticated'),
      mockAccount: {
        email: 'test@gmail.com',
        password: '123456',
      },
    };
  },
  mounted() {
    this.authenticated = localStorage.getItem('authenticated');
    if (this.authenticated === 'true') {
      if (window.location.pathname !== '/home') {
        this.$router.push('/home');
      }
    } else {
      if (window.location.pathname !== '/') {
        this.$router.push('/');
      }
    }
  },
  updated() {
    this.authenticated = localStorage.getItem('authenticated');
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
