<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/article">Article</router-link> |
      <router-link to="/todo">Todo</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import text from "raw-loader!../hoge.txt";
import pubkey from "raw-loader!../jwtRS256.key.pub";
import AWS from "aws-sdk";

export default defineComponent({
  setup() {
    const s3 = new AWS.S3();
    let msg = ref<string>("");
    return {
      msg,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
