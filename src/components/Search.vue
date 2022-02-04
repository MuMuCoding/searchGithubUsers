<template>
  <section>
    <h2>Search Github Users</h2>
    <div><input type="text" palseholder="enter the name you search" v-model="keyWord"/>
    <button @click="show">Search</button></div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data(){
      return{
          keyWord:''
      }
  },
  methods: {
    show() {
      this.$bus.$emit("updateListData", { users: [] });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then((res) => {
          console.log("请求成功了", res.data);
          this.$bus.$emit('updateListData',{users:res.data.items})
        }).catch((error) => {
          console.log("请求失败", error.message);
        });
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>