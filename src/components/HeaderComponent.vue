<template>
  <header>
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
}
</script>

<style scoped>
header ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  background: #42b983;
  display: flex;
}
header li:first-child{
  margin-left:15px;
}
header li{
  margin: 1rem 4rem;
}
header a{
  color: #fff;
  text-decoration: none;
}
</style>
