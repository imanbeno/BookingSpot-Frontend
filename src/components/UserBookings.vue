<template>
    <div class="pt-16 container mx-auto">
      <h1 class="text-3xl font-bold text-center">Mijn Boekingen</h1>
      <div v-for="booking in bookings" :key="booking.id" class="m-4 p-4 border rounded shadow">
        <h2 class="text-2xl">{{ booking.campingSpot.name }}</h2>
        <p>Van: {{ booking.startDate }}</p>
        <p>Tot: {{ booking.endDate }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserBookings',
    data() {
      return {
        bookings: []
      }
    },
    async created() {
      const userId = 1 
      const response = await fetch(`https://localhost:7157/User/${userId}/bookings`)
      this.bookings = await response.json()
    }
  }
  </script>
  
  <style scoped>
  </style>
  