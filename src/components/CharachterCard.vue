<template>
    <article 
          class="flex flex-col sm:flex-row bg-gray text-white sm:h-[220px] w-full rounded-lg overflow-hidden hover:border-2 hover:border-orange hover:shadow-lg hover:shadow-orange  cursor-pointer" @click.prevent="handleClick(charachter.id)">
              <div class="sm:w-[40%]">
                <img :src="charachter.image" alt="Frankenstein's Monster" class="w-full h-full object-cover">  
              </div>
              <div class="p-[1rem] flex flex-col justify-between w-[60%]">
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
                      <span class="w-[1rem] h-[1rem] mr-[6px] rounded-full bg-darkGray"></span>
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
</template>

<script>
    export default {
        name: "CharachterCard",
        props: ["charachter"],
        methods:{
          formatDate(dateString) {
          const date = new Date(dateString);
          
          return new Intl.DateTimeFormat('default', {dateStyle: 'long', timeStyle: 'short'}).format(date);
          },
          handleClick(id){
            this.$router.push({ name: 'charachter', params: { id } })
            
          }
        }
}
</script>
