<template>
  <div class="row">
    <div
      v-show="info.users.length"
      v-for="user in info.users"
      :key="user.login"
      class="card"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" alt="图片" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        // errMsg:''
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
      this.info = { ...this.info, ...dataObj };
    });
  },
};
</script>

<style scoped>
	.row {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
		overflow:auto;
	}

.card{
    float:left;
    width:25%;
    padding:0.75rem;
    margin-bottom: 2rem;
    border:1px solid #ccc;
    text-align: center;
}

	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
</style>