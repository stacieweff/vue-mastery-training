<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ catLength }} categoires. </p>
    <p>{{ getEventById(2) }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['user', 'categories']),
    ...mapGetters(['getEventById']),
    catLength() {
      return this.$store.getters.catLength
    },
    // getEvent() {
    //   return this.$store.getters.getEventById
    // }
  }
}

</script>

<style scoped>

</style>
