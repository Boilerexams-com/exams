<template lang="html">

  <section class="full-screen-button">
    <b-button @click="toggleFullScreen" class="p-2" variant="dark-outline">
      <transition name="fade">
        <b-icon :icon="fullScreenIcon" font-scale="1.5" style="color: white"></b-icon>
      </transition>      
    </b-button>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'full-screen-button',
    props: [],
    mounted () {

    },
    data () {
      return {
        fullScreenIcon: "fullscreen"
      }
    },
    methods: {
      toggleFullScreen(){
        this.$root.$emit('toggle fullscreen')
        if(this.fullScreenIcon === "fullscreen") {
          this.fullScreenIcon = "fullscreen-exit"
        }
        else {
          this.fullScreenIcon = "fullscreen"
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .full-screen-button {
    
  }
  .full-screen-button button:focus,.full-screen-button button:active {
    outline: none !important;
    box-shadow: none;
  }
  
</style>
