<template>
 <div class=" home container">
   <div class="row">
     <ApodDetails />
   </div>
 </div>
</template>

<script>
// @ is an alias to /src
 import ApodDetails from '../components/ApodDetails'

export default {
  name: 'home',
  components: {
    ApodDetails
  }
}
</script>
