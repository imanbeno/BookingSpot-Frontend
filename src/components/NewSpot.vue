<template>
    <div class="pt-16 container mx-auto flex justify-center">
      <div class="w-full max-w-md">
        <h1 class="text-3xl font-bold text-center">Nieuwe Campingplaats</h1>
        <form @submit.prevent="createSpot" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Naam
            </label>
            <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Naam">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
              Beschrijving
            </label>
            <input v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Beschrijving">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
              Locatie
            </label>
            <input v-model="location" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Locatie">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="capacity">
              Capaciteit
            </label>
            <input v-model="capacity" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="capacity" type="number" placeholder="Capaciteit">
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Aanmaken
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewSpot',
    data() {
      return {
        name: '',
        description: '',
        location: '',
        capacity: 0
      }
    },
    methods: {
      async createSpot() {
        const response = await fetch('https://localhost:7157/CampingSpot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.name,
            description: this.description,
            location: this.location,
            capacity: this.capacity,
            isAvailable: true
          })
        })
        if (response.ok) {
          // Campingplaats succesvol toegevoegd
          this.$router.push('/owner-spots')
        } else {
          // Fout bij het toevoegen van campingplaats
          alert('Fout bij het toevoegen van campingplaats')
        }
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  