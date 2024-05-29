<template>
    <div class="pt-16 container mx-auto">
      <h1 class="text-3xl font-bold text-center">Mijn Campingplaatsen</h1>
      <div v-for="spot in campingSpots" :key="spot.id" class="m-4 p-4 border rounded shadow">
        <h2 class="text-2xl">{{ spot.name }}</h2>
        <p>{{ spot.description }}</p>
        <p>{{ spot.location }}</p>
        <p>Capaciteit: {{ spot.capacity }} personen</p>
        <p v-if="spot.isAvailable" class="text-green-500">Beschikbaar</p>
        <p v-else class="text-red-500">Niet Beschikbaar</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OwnerSpots',
    data() {
      return {
        campingSpots: []
      }
    },
    async created() {
      const response = await fetch('https://localhost:7157/CampingSpot')
      this.campingSpots = await response.json()
    }
  }
  </script>
  
  <style scoped>
  </style>
  