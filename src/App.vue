<template>
  <div class="bg-darkGray py-[2rem] lg:py-[3rem] 2xl:py-[4.5rem] min-h-[100vh]">
      <router-link class=" text-orange text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] 2xl:text-[5.625rem] text-center font-black block" to="/">
        The Rick and Morty Characters
      </router-link>
      <!-- <router-link class=" text-orange text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] 2xl:text-[5.625rem] text-center font-black block" to="/about">
        About
      </router-link> -->

      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  },
  
  methods:{

  },
  mounted () {
    
  },
  
  
}
</script> 
