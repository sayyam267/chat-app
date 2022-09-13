<template>
  <div id="app">
     <Chat v-if="user" />
    <Login v-else />
   
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Chat from './components/Chat.vue';
import firebase from 'firebase/compat/app';

export default {
    name: "App",
    data:() => {
      return {
        user: firebase.auth().currentUser,
      }
    },
    components: { Login, Chat }
}
</script>

<style>
body{
    background-color: #313131;
  }
</style>
