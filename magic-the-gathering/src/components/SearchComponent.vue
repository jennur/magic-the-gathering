<template>
    <div class="search">
      <input type="text" v-on:input="handleSearchTerm($event)" />
      <input type="submit" />
    </div>
</template>

<script>
export default {
  name: "SearchComponent",
  props: {},
  methods: {
    handleSearchTerm(event) {
      this.$emit('on-search', event.target.value)
    }
  }
}
</script>