<template>
  <div class="loginpage">
    <img src="../assets/images/spotify.png" alt="Spotify Logo" class="logo" />
    <button @click="handleLogin" class="login-button">Login</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store=useStore();

const handleLogin = () => {
  store.dispatch('auth/login')
};
</script>

<style scoped>
.loginpage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 500px;
  height: auto;
  margin-bottom: 20px;
}
.login-button {
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #1db954;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.login-button:hover {
  background-color: #233f2d;
}
</style>
