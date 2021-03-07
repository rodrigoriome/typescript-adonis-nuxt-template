<template>
  <div>
    <h1>It works!</h1>
    <button @click="increase">
      Clicked {{ counter }} times
    </button>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        counter: 0,
      }
    },

    methods: {
      increase() {
        this.counter++
      },
    },
  }
</script>
