<template>
  <div class="bg-darkGray py-[2rem] lg:py-[3rem] 2xl:py-[4.5rem] min-h-[100vh]">
      <h1 class=" text-orange text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] 2xl:text-[5.625rem] text-center font-black">The Rick and Morty Characters</h1>
      <div class="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5 py-[4.5rem] px-[3rem]">
        <article v-for="charachter in charachters" :key="charachter.id" 
        class="flex flex-col sm:flex-row bg-gray text-white sm:h-[220px] w-full rounded-lg overflow-hidden hover:border-2 hover:border-orange hover:shadow-lg hover:shadow-orange  cursor-pointer ">
            <div class="sm:w-[40%]">
              <img :src="charachter.image" alt="Frankenstein's Monster" class="w-full h-full object-cover">  
            </div>
            <div class="p-[1rem] flex flex-col justify-between">
              <div>
                <h1 class=" font-bold text-[1.5rem]">{{charachter.name}}</h1>
                <span class="flex items-center font-medium">
                  <template v-if="charachter.status == 'Alive'">
                    <span class="w-[1rem] h-[1rem] mr-[6px] rounded-full bg-green inli"></span>
                    <span>Alive</span>
                  </template>
                  <template v-else-if="charachter.status == 'Dead'">
                    <span class="w-[1rem] h-[1rem] mr-[6px] rounded-full bg-red"></span>
                    <span>Dead</span>
                  </template>
                  <template v-else>
                    <span class="w-[1rem] h-[1rem] mr-[6px] rounded-full bg-"></span>
                    <span>Unknown</span>
                  </template>
                  <span>&nbsp- {{ charachter.species }}</span>
                </span>
              </div>
              <div>
                <p class="text-lightGray">Last known location: </p>
                <p class="font-medium">{{ charachter.location.name }}</p>
              </div>
              <div>
                <p class="text-lightGray">Created at: </p>
                <p class="font-medium">{{ formatDate(charachter.created) }}</p>
              </div>
            </div>
        </article>
      </div>
      <div v-if="loading" class=" text-6xl text-white">Loading...</div>
  </div>
</template>

<script>
import getCharachters from './api/getCharachters'

export default {
  name: 'App',
  data() {
    return {
      charachters: [],
      page: 1,
      loading: false,
      lastPage: 1
    }
  },
  
  methods:{
    async fetchCharachters(){
      const response = await getCharachters(this.page);

      this.charachters .push(...response.results);

      this.lastPage = response.info.pages;
      this.page++;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      
      return new Intl.DateTimeFormat('default', {dateStyle: 'long', timeStyle: 'short'}).format(date);
    }

  },
  mounted () {
    this.fetchCharachters();

    window.addEventListener("scroll", async function(){
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight- 800 && !this.loading){
        this.loading = true;

        await this.fetchCharachters();

        this.loading = false;
      }
    }.bind(this))
  },
  
  
}
</script> 
