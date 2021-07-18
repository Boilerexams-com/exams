<template lang="html">

  <section class="answer-mode-button mx-2">
    <b-button :variant="mode" @click="toggleMode" :disabled="isDisabled">{{mode === 'outline-dark' ? 'Video Mode' : 'Answer Mode'}}</b-button>
  </section>

</template>

<script lang="js">

  export default {
    name: 'answer-mode-button',
    props: [],
    mounted () {
      this.$root.$on('exam selected', () => {
        this.isDisabled = false;
      })
    },
    data () {
      return {
        mode: "outline-dark",
        isDisabled: true
      }
    },
    methods: {
      toggleMode() {
        if(this.mode === "success") {
          this.mode = "outline-dark";
        }
        else {
          this.mode = "success";
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .answer-mode-button {

  }
</style>
