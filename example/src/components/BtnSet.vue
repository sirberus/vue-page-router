<template>
  <div class="btn-set">
    <button v-for="(path, label) in routes" :key="path">
      <router-link :to="path">
        {{label}}
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes
        .reduce((acc,cur)=>{
          acc[cur.name] = cur.path
          return acc 
        },{})
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style scoped>
.btn-set {
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
</style>
