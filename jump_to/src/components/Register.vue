<template>
    <div className="container">
      <div className="container-login">
        <span className="login-form-title">Bem vindo ao Jump To!</span>
        <div className="wrap-login">
          <form className="form-login">
            <span className="login-form-title">
              <img alt="jump_to_logo" class="logo" src="@/assets/My_project11_transp.png" />
            </span>

            <div className="wrap-input">
              <input type="text" 
                :class="[name != '' ? 'has-val input' : 'input']"
                v-model="name"
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input type="email" 
                :class="[email != '' ? 'has-val input' : 'input']"
                v-model="email"
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input type="password" 
                :class="[password != '' ? 'has-val input' : 'input']"
                v-model="password"
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">Cadastre-se</button>
            </div>

            <div className="text-center">
              <span className="txt1">Já possui conta?</span>
              <a className="txt2" href="/">Faça login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {  
        name: '',
        email:'',
        password:'',
      }
    },
  }
</script>
<style>
   @import "../assets/style.css";
</style>