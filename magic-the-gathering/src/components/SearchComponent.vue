<template>
    <div class="search">
      <input class="search__field" type="text" v-on:input="handleSearchTerm($event)" />
      <input class="search__submit" type="submit" value="Search" />
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