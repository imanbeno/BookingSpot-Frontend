<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-4">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="accountName" class="block text-gray-700 text-sm font-bold mb-2">Account Name:</label>
          <input v-model="accountName" type="text" id="accountName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input v-model="password" type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
        </div>
      </form>
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        accountName: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('https://localhost:7157/User/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              AccountName: this.accountName,
              Password: this.password
            })
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const user = await response.json();
          // Handle successful login (e.g., save user info, redirect)
          console.log('Logged in user:', user);
        } catch (error) {
          console.error('Error logging in:', error);
          this.errorMessage = 'Ongeldige inloggegevens. Probeer het opnieuw.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  