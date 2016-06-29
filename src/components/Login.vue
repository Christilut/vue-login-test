<template lang="jade">
.container
  .row
    .main
      h3
        | Please Log In, or
        a(href='#')  Sign Up
      .row
        .col-xs-12.col-sm-6.col-md-6.form-group
          a.btn.btn-lg.btn-primary.btn-block(href='#') Facebook
        .col-xs-12.col-sm-6.col-md-6
          a.btn.btn-lg.btn-info.btn-block(href='#') Google
      .login-or.text-center
        hr.hr-or
        span.span-or or
        hr.hr-or
      form(role='form')
        .form-group
          label(for='inputUsernameEmail') Username or email
          input#inputUsernameEmail.form-control(type='text')
        .form-group
          a.pull-right(href='#') Forgot password?
          label(for='inputPassword') Password
          input#inputPassword.form-control(type='password')
        .checkbox.pull-right
          label
            input(type='checkbox')
            |             Remember me
        button.btn.btn.btn-primary(type='submit')
          | Log In

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
  height: calc(100% - 70px);
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
