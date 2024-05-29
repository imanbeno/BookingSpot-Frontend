<template>
    <div class="pt-16 container mx-auto">
      <h1 class="text-3xl font-bold text-center">Camping Spots</h1>
      <input v-model="search" type="text" placeholder="Zoek op naam of locatie" class="mt-4 p-2 border rounded w-full">
      <div v-if="campingSpots.length">
        <div v-for="spot in filteredCampingSpots" :key="spot.id" class="m-4 p-4 border rounded shadow">
          <h2 class="text-2xl">{{ spot.name }}</h2>
          <p>{{ spot.description }}</p>
          <p>{{ spot.location }}</p>
          <p>Capaciteit: {{ spot.capacity }} personen</p>
          <p v-if="spot.isAvailable" class="text-green-500">Beschikbaar</p>
          <p v-else class="text-red-500">Niet Beschikbaar</p>
        </div>
      </div>
      <div v-else>
        <p class="text-center">Geen campingplekken gevonden.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CampingSpotsPage',
    data() {
      return {
        search: '',
        campingSpots: []  
      }
    },
    computed: {
      filteredCampingSpots() {
        return this.campingSpots.filter(spot => {
          const name = spot.name ? spot.name.toLowerCase() : '';
          const location = spot.location ? spot.location.toLowerCase() : '';
          return name.includes(this.search.toLowerCase()) || location.includes(this.search.toLowerCase());
        });
      }
    },
    async created() {
      try {
        const response = await fetch('https://localhost:7157/CampingSpot');  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.campingSpots = Array.isArray(data) ? data : [data]; 
      } catch (error) {
        console.error('Error fetching camping spots:', error);
        this.campingSpots = [];
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  