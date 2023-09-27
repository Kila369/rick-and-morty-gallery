  <template>
    <div class="flex flex-col lg:flex-row justify-between max-w-[75%] sm:max-w-[50%] mx-auto mt-[1.5rem]">
      <input type="text" class="bg-gray hover:shadow-orange  text-white font-bold py-2 px-4 rounded placeholder:font-black placeholder:text-lightGray" placeholder="Name" v-model.trim="filterName" />
      <select v-model="filterStatus" class="bg-gray hover:bg-blue-700 text-lightGray font-black py-2 px-4 rounded">
        <option value="" class="text-lightGray font-bold">Status</option>
        <option value="alive" class="text-white font-bold">Alive</option>
        <option value="dead" class="text-white font-bold">Dead</option>
        <option value="unknown" class="text-white font-bold">Unknown</option>
      </select>
      <select v-model="filterGender" class="bg-gray hover:bg-blue-700 text-lightGray font-black py-2 px-4 rounded">
        <option value="" class="text-lightGray font-bold">Gender</option>
        <option value="female" class="text-white font-bold">Female</option>
        <option value="male" class="text-white font-bold">Male</option>
        <option value="genderless" class="text-white font-bold">genderless </option>
        <option value="unknown" class="text-white font-bold">Unknown</option>
      </select>
      <button @click.prevent="handleReset" class="bg-gray hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reset</button>
    </div>
    <InfiniteScroll :loading="loading" @scrolled-to-bottom="scrolledToBottom">
      <div class="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5 py-[3rem] px-[3rem]">
        <CharachterCard v-for="charachter in charachters" :key="charachter.id" :charachter="charachter"></CharachterCard>
      </div>
      <div v-if="loading" class="text-center text-6xl text-white">Loading...</div>
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
        lastPage: 1,
        filterName: "",
        filterStatus: "",
        filterGender: ""
      }
    },
    
    methods:{
      async fetchCharachters(){
        if(this.page > this.lastPage){
          return;
        }
        this.loading = true;

        const response = await getCharachters(this.page, this.filterName, this.filterStatus, this.filterGender);
  
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
      },
      handleReset(){
        this.filterName= "";
        this.filterStatus= "";
        this.filterGender= "";
        this.charachters = [];
        this.page= 1;
        this.lastPage= 1;
        this.fetchCharachters();
      }
      
    },
    created () {
      this.fetchCharachters();
    },
    watch: {
      filterName(){
        this.charachters = [];
        this.page= 1;
        this.lastPage= 1;
        this.fetchCharachters();
      },
      filterStatus(){
        this.charachters = [];
        this.page= 1;
        this.lastPage= 1;
        this.fetchCharachters();
      },
      filterGender(){
        this.charachters = [];
        this.page= 1;
        this.lastPage= 1;
        this.fetchCharachters();
      }
    }
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