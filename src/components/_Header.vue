<template lang='html'>
  <header>
    <div class='form-group'>
      <select class='form-control' v-on:change='changeLanguage'>
        <option v-for='language in languages' value='{{language.value}}'>{{language.text}}</option>
      </select>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      changeLanguage: function(event) {
        Vue.config.lang = event.target.value
      }
    },
    components: {

    },
    data() {
      return {
        languages: [{
          text: 'English (US)',
          value: 'en_US',
        }, {
          text: 'Nederlands',
          value: 'nl_NL',
        }]
      }
    }
  }
</script>

<style lang='scss' scoped>
  header {
    border-bottom: 1px solid grey;
    background: #eee;
    display: flex;
    justify-content: flex-end;;
    padding: 10px;

    .form-group {
      margin-bottom: 0;
    }

    h3 {
      align-self: center;
      margin: 0;
    }
  }
</style>
