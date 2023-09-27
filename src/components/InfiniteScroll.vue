<template>
        <slot></slot>
</template>

<script>
    export default {
        name: "InfiniteScroll",
        props: ["loading"],
        emits: ["scrolled-to-bottom"],
        mounted () {
        window.addEventListener("scroll", async function(){
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight- 800 && !this.loading){
            this.$emit("scrolled-to-bottom")
            }
        }.bind(this))
        },
        beforeUnmount(){
            window.removeEventListener("scroll", async function(){
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight- 800 && !this.loading){
            this.$emit("scrolled-to-bottom")
            }
        }.bind(this)) 
        }
    }
</script>

