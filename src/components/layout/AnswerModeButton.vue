<template lang="html">

  <section class="answer-mode-button ">
    <b-button @click="toggleMode" :disabled="isDisabled" class="p-2" variant="dark-outline">
      <transition name="fade">
        <b-icon :icon="icon" font-scale="1.5" style="color: white"></b-icon>
      </transition>      
    </b-button>
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
        isDisabled: false,
        icon: "eye-slash-fill"
      }
    },
    methods: {
      toggleMode() {
        if(this.icon === "eye-slash-fill") {
          this.icon = "check2-square";
        }
        else {
          this.icon = "eye-slash-fill";
        }
        
        this.$root.$emit('toggle answer mode', this.icon === "eye-slash-fill" ? false : true);
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .answer-mode-button {
    margin-left: auto;
  }
</style>
