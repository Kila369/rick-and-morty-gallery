<template>
    <!-- <div>
        RICK AND MORTY CHARACHTER {{ $route.params.id }}
    </div> -->
    <div v-if="!error" class="flex flex-col sm:items-center lg:items-start lg:flex-row sm:min-h-[70vh] px-[3rem] pt-[3rem]">
        <div class="sm:w-[30%]" v-if="!loading">
            <img :src="charachter.image" :alt="charachter.name" class="w-full h-full object-cover">  
        </div>
        <div class="pl-[2rem] text-white w-[60%]" v-if="!loading">
            <div>
                <h1 class="font-black text-[3rem] m-0 p-0">{{ charachter.name }}</h1>
            </div>
            <div class="flex flex-col sm:flex-row">
                <div>
                    <div>
                        <p class="text-lightGray">Species: </p>
                        <p class="font-medium">{{ charachter.species }}</p>
                    </div>
                    <div>
                        <p class="text-lightGray">Status: </p>
                        <p class="font-medium">
                            <span class="flex items-center font-medium">
                                <template v-if="charachter.status == 'Alive'">
                                    <span class="w-[1rem] h-[1rem] mr-[6px] rounded-full bg-green inline"></span>
                                    <span>Alive</span>
                                </template>
                                <template v-else-if="charachter.status == 'Dead'">
                                    <span class="w-[1rem] h-[1rem] mr-[6px] rounded-full bg-red"></span>
                                    <span>Dead</span>
                                </template>
                                <template v-else>
                                    <span class="w-[1rem] h-[1rem] mr-[6px] rounded-full bg-darkGray"></span>
                                    <span>Unknown</span>
                                </template>
                            </span>
                        </p>
                    </div>
                    <div>
                        <p class="text-lightGray">Gender: </p>
                        <p class="font-medium">{{ charachter.gender }}</p>
                    </div>
                    <div>
                        <p class="text-lightGray">Origin: </p>
                        <p class="font-medium">{{ charachter.origin.name }}</p>
                    </div>
                    <div>
                        <p class="text-lightGray">Last known location: </p>
                        <p class="font-medium">{{ charachter.location.name }}</p>
                    </div>
                    <div>
                        <p class="text-lightGray">First seen in: </p>
                        <EpisodeLink :episodeUrl="charachter.episode[0]" />
                    </div>
                    <div>
                        <p class="text-lightGray">Created at: </p>
                        <p class="font-medium">{{ formatDate(charachter.created) }}</p>
                    </div>
                </div>
                <div class="sm:pl-[10rem]">
                    <p class=" text-lightGray font-bold">Episodes({{ charachter.episode.length }}): </p>
                    <div class="sm:max-h-[50vh] sm:overflow-y-scroll">
                        <EpisodeLink v-for="episodeUrl in charachter.episode" :episodeUrl="episodeUrl" :key="episodeUrl" />
                    </div>
                </div>
            </div>
        </div>
    </div>  

    <div v-else class="text-white text-center text-7xl mt-32">
        There is no charachter with that id!
    </div>
</template>

<script>
    import getCharacter from '../api/getCharachter';
    import EpisodeLink from '@/components/EpisodeLink.vue';

    export default {
        name: "Charachter",
        components: {
            EpisodeLink
        },
        data(){
            return{
                charachter: {},
                loading: true,
                error: false,
            }
        },
        async created(){
            const id = this.$route.params.id;
            await this.fetchCharachter(id);
        },
        methods:{
            async fetchCharachter(id){
                this.loading = true;
                const response = await getCharacter(id);

                if(response.error){
                    this.error = true;
                    return;
                }

                this.charachter = response;
                this.loading = false;

            },
            formatDate(dateString) {
                const date = new Date(dateString);
                
                return new Intl.DateTimeFormat('default', {dateStyle: 'long', timeStyle: 'short'}).format(date);
            },
        }
    }
</script>
