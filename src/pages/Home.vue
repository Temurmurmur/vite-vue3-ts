<template>
  <div>
    <div class="row">
      <card v-for="item in character" :key="item.id" :card="item" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Card from "../components/Card.vue";
import axios from 'axios';
export default {
  components: {Card},
  setup () {
    const character = ref([])
    axios.get('https://rickandmortyapi.com/api/character')
        .then(function (response) {
          character.value = response.data.results
        })
    return {
      character
    }
  }
}
</script>
