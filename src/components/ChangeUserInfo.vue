<template>
    <div>
      <h1 class="text-3xl font-bold">Wijzig Gebruikersinformatie</h1>
      <form @submit.prevent="updateUserInfo">
        <input v-model="name" type="text" placeholder="Naam" />
        <input v-model="firstName" type="text" placeholder="Voornaam" />
        <button type="submit">Wijzig</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChangeUserInfo',
    data() {
      return {
        name: '',
        firstName: ''
      }
    },
    methods: {
      async updateUserInfo() {
        const userId = 1 
        const response = await fetch(`https://localhost:7157/User/${userId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.name,
            firstName: this.firstName
          })
        })
        if (response.ok) {
          
        } else {
        
        }
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  