<template>
    <router-link v-if="!loading" to="" class="block hover:text-orange">{{ episode.episode }}: {{ episode.name }} - {{ episode.air_date }}</router-link>
</template>

<script>
    import getEpisode from '../api/getEpisode';

    export default {
        name: "EpisodeLink",
        props: ["episodeUrl"],
        data(){ 
            return{
                episode: {},
                loading: true,
            }
        },
        async created(){
            this.episode = await getEpisode(this.episodeUrl);
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>

</style>