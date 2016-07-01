<template lang="jade">
.container
  .row
    .main
      h3 {{ $t('login.please_login') }}
        a(href='#')  {{ $t('login.link_signup') }}
      .row
        .col-xs-12.col-sm-6.col-md-6.form-group
          a.btn.btn-lg.btn-primary.btn-block(href='#') {{ $t('generic.facebook') }}
        .col-xs-12.col-sm-6.col-md-6
          a.btn.btn-lg.btn-info.btn-block(href='#') {{ $t('generic.google') }}
      .login-or.text-center
        hr.hr-or
        span.span-or {{ $t('generic.or') }}
        hr.hr-or
      form(role='form')
        .form-group
          label(for='inputUsernameEmail') {{ $t('login.username_email') }}
          input#inputUsernameEmail.form-control(type='text')
        .form-group
          a.pull-right(href='#') {{ $t('login.forgot_password') }}
          label(for='inputPassword') {{ $t('login.password') }}
          input#inputPassword.form-control(type='password')
        .checkbox.pull-right
          label
            input(type='checkbox')
            | {{ $t('login.remember_me') }}
        button.btn.btn.btn-primary(type='submit')
          | {{ $t('login.login') }}

</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;

  .row {
    align-self: center;
  }
}
.main {
  margin: 15px;
  max-width: 325px;

  .hr-or {
    margin: 10px 0;
  }

  form {
    margin-top: 20px;
  }
}
</style>
