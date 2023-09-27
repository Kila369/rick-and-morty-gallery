<template>
    <p v-if="!loading">
        {{ episode.episode }}: {{ episode.name }} - {{ episode.air_date }}
    </p>
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
            this.episode = await getEpisode(this.episodeId);
            this.loading = false;
        },
        computed: {
            episodeId(){
                const urlArray = this.episodeUrl.split('/');
                return urlArray[urlArray.length-1];
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>