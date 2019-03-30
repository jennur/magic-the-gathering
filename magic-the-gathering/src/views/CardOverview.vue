<template>
  <main>
    <div class="search">
      <SearchComponent v-on:on-search="handleSearch"/>
    </div>
    <div class="card-container" v-if="loaded">
      <Card v-for="card in cards" :key="card.index"
            v-bind:name="card.name"
            v-bind:type="card.originalType"
            v-bind:text="card.originalText"
            v-bind:imageUrl="card.imageUrl"
            v-bind:cardId="card.id"
      />
    </div>
    <div class="card-container" v-else>
        <p>Loading cards ...</p>
    </div>
  </main>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
import Card from '@/components/Card.vue';

export default {
  name: "CardOverview",
  components: { 
    Card,
    SearchComponent
  },
  data() {
    return { 
        cards: [], 
        loaded: false,
    };
  },
  methods: {
    getData() {
      fetch('https://cors-anywhere.herokuapp.com/https://api.magicthegathering.io/v1/cards')
      .then(response => {
        this.loaded = false;
        return response.json();
      })
      .then(data => {
        let initialCards = data.cards;
        let filteredCards = [];
        filteredCards = initialCards.filter( (card) => {
          return (card.imageUrl !== undefined);
        });
        this.cards = filteredCards;
        this.loaded = true;
      })
    },

    handleSearch(searchTerm){
      if(searchTerm === '') {
        this.getData();
      } else {
        let cardList = this.cards;
        let newCardList = [];

        newCardList = cardList.filter(card => {
          return (card.name.toLowerCase().includes(searchTerm.toLowerCase()));
        });
        this.cards = newCardList;
      }
    }
  },

  beforeMount: function() {
    this.getData();
    if(!sessionStorage.getItem('AuthToken')) {
      router.push('home');
    }
  }
}

</script>