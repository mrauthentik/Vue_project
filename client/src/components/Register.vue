<template>
   <div>
    <h1>Register</h1>

    <input 
        type="email"
        name="email"
        v-model="email"
        placeholder="Input valid email" />
    <br>
    <input 
        type="password"
        name="password"
        v-model="password"
        placeholder="Input valid password"/>
        <br>
        <button
         @click="register" >Register</button>
   </div>
  </template>
  
  <script>
  import AuthenticationService from "@/services/AuthenticationService.js";
   export default {
data() {
    return {
        email: '',
        password: ''
    }
},
 methods: {
  async register () {
      const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
        })
        console.log(response.data)
    }
 },


}

</script>
  
  
  <style scoped>
  
  </style>
  