<template>
  <div class="apod-details col-12 text-center">
    <h1>Nasa picture of the day</h1>
    <h5>{{apod.date}}</h5>
    <img :src="apod.url" />

    <p>{{apod.explanation}}</p>
  </div>
</template>

<script>
export default {
  name: "apod-details",
  data() {
    return {};
  },
  computed: {
    apod() {
      return this.$store.state.apod;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
img {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>