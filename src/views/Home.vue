  <template>
    <InfiniteScroll :loading="loading" @scrolled-to-bottom="scrolledToBottom">
      <div class="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5 py-[4.5rem] px-[3rem]">
        <CharachterCard v-for="charachter in charachters" :key="charachter.id" :charachter="charachter"></CharachterCard>
      </div>
      <div v-if="loading" class=" text-6xl text-white">Loading...</div>
      <div v-if="page-1 != 1" class="fixed top-[94%] right-[2%] sm:right-[0%] cursor-pointer bg-white w-[2rem] h-[2rem] rounded-full text-center " @click="scrollToTop">
        <i class="arrow up"></i>
      </div>
    </InfiniteScroll>
  </template>
  
  <script>
  import getCharachters from '../api/getCharachters'
  import InfiniteScroll from '../components/InfiniteScroll.vue';
  import CharachterCard from '../components/CharachterCard.vue';
  
  export default {
    name: 'Home',
    components:{
      InfiniteScroll,
      CharachterCard
    },
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
        if(this.page > this.lastPage){
          return;
        }
        this.loading = true;

        const response = await getCharachters(this.page);
  
        this.charachters .push(...response.results);
  
        this.lastPage = response.info.pages;
        this.page++;
        this.loading = false;

      },
      async scrolledToBottom(){
        await this.fetchCharachters();
      },
      scrollToTop() {
        window.scrollTo(0,0);
      }

    },
    mounted () {
      this.fetchCharachters();
    },    
  }
  </script> 
  
  <style>
      .arrow {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        margin-top: 13px;
      }

      .up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }

  </style>