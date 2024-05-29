<template>
    <nav class="bg-orange-500 p-4 fixed w-full top-0">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-2xl font-bold">Adventure Dreams</div>
        <ul class="flex space-x-4">
          <li><router-link to="/" class="text-white">Home</router-link></li>
          <li><router-link to="/camping-spots" class="text-white">Camping Spots</router-link></li>
          <li><router-link to="/user-bookings" class="text-white">Mijn Boekingen</router-link></li>
          <li><router-link to="/login" class="text-white">Login</router-link></li>
          <li><router-link to="/owner-spots" class="text-white">Mijn Campingplaatsen</router-link></li>
          <li><router-link to="/new-spot" class="text-white">Nieuwe Campingplaats</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBarComponent',
  }
  </script>
  
  <style scoped>
  </style>
  