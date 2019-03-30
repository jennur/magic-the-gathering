<template>
  <div class="card-specific">
    <div class="card-specific__image">
      <img :src="imageUrl" />
    </div>
      <div class="card-specific__text">
        <h1>{{ name }}</h1>
        <ul>
        <li>{{ text }}</li>
        <li><b>Rarity:</b> {{ rarity }}</li>
        <li><b>Colors:</b>
            <span v-for="(color, index) in colors" :key="index">
            {{ color }}
            </span> 
        </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardSpecificComponent',
  props: {
      name: String,
      imageUrl: String,
      text: String,
      rarity: String,
      colors: Array
  }
}
</script>