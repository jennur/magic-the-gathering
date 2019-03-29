<template>
    <div class="card">
      <h2 class="card__headline">{{ name }}</h2>
      <div class="card__image-wrapper">
        <img class="card__image" :src="imageUrl"  />
      </div>
      <div class="card__info">
        <span><b>Type: </b> {{ type }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: {
      name: String,
      type: String,
      text: String,
      imageUrl: String,
      id: String
  }

}

</script>