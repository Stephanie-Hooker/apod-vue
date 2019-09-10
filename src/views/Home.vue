<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <search />
      </div>
    </div>
    <div class="row">
      <ApodDetails />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ApodDetails from "../components/ApodDetails";
import Search from "../components/Search";

export default {
  name: "home",
  components: {
    ApodDetails,
    Search
  }
};
</script>
