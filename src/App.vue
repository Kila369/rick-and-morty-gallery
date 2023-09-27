<template>
  <div class="bg-darkGray pt-[2rem] lg:pt-[3rem] 2xl:pt-[4.5rem] min-h-[100vh]">
      <router-link class=" text-orange text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] 2xl:text-[5.625rem] text-center font-black block" :to="{ name: 'home' }">
        The Rick and Morty Characters
      </router-link>

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
