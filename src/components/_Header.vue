<template lang="jade">
header
  dropdown
    button.btn.btn-sm.btn-default(type='button', data-toggle='dropdown')
      | Nederlands
      span.caret
    ul.dropdown-menu(slot='dropdown-menu')
      li
        a test
      li
        a ablasef

</template>

<script>
import dropdown from 'vue-strap'
export default {
  components: {
    dropdown
  }
}
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid grey;
  background: #eee;
  height: 55px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.caret {
  margin-left: 10px;
}
</style>
