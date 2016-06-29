<template lang="jade">
main-header
router-view
main-footer
</template>

<script>
import MainHeader from './components/_Header'
import MainFooter from './components/_Footer'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}

</script>

<style lang="scss" scoped>

</style>
