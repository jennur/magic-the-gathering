<template>
  <main>
    <div class="card-view">
      <div class="card-view--loading" v-if="!loaded">
        <p>Loading card info ...</p>
      </div>
      <CardSpecificComponent v-else 
                              v-bind:name="name"
                              v-bind:imageUrl="imageUrl"
                              v-bind:text="text"
                              v-bind:rarity="rarity"
                              v-bind:colors="colors"
      />
      <div class="button">
        <router-link :to="{ path: '/card-overview'}" replace>Back to card overview</router-link>
      </div>
    </div>
  </main>
</template>

<script>
import CardSpecificComponent from '@/components/CardSpecificComponent.vue';

export default {
  name: "CardSpecific",
  props: {},
  components: {
      CardSpecificComponent
  },
  data() {
    return { 
      loaded: false,
      name: String,
      imageUrl: String,
      text: String,
      rarity: String,
      colors: Array
    }
  },
  methods: {
    getData() {
      fetch('https://cors-anywhere.herokuapp.com/https://api.magicthegathering.io/v1/cards/' + this.$route.params.id)
      .then(response => {
        this.loaded = false;
        return response.json();
      })
      .then(data => {
        let card = data.card;
        console.log(card);
        this.name = card.name;
        this.imageUrl = card.imageUrl;
        this.text = card.text;
        this.rarity = card.rarity;
        this.colors = card.colors;

        this.loaded = true;
      });
    },
  },
  beforeMount() {
    this.getData();
  }
}
</script>