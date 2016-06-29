<template lang="jade">
h1 hello

//- alert(:show.sync='showTop', :duration='3000', type='danger', width='400px', placement='top', dismissable='')
//-   span.icon-info-circled.alert-icon-float-left
//-   strong Heads up!
//-   p This alert needs your attention.

</template>

<script>
// import { alert } from 'vue-strap'
//
// export default {
//   components: {
//     alert
//   },
//   data () {
//     return {
//       // note: changing this line won't causes changes
//       // with hot-reload because the reloaded component
//       // preserves its current state and we are modifying
//       // its initial state.
//       msg: 'Hello World!'
//     }
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>
