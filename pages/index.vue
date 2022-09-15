<script>

  export default{

    data(){
      return {
        helpCards: [
          {
            title: 'Becomes Healthier',
            description: 'immune will stronger if the body is healthier',
            icon: 'heart'
          },
          {
            title: 'Increase Energy',
            description: 'Have enough energy can help carry out a routine',
            icon: 'bolt'
          },
          {
            title: 'Becomes Healthier',
            description: 'Body will feel lighterand will not be easily tired',
            icon: 'lock'
          },
          {
            title: 'Becomes Healthier',
            description: 'living a healthy life will also increase self-confidence',
            icon: 'heart'
          },
        ]
      }
    },

  }
</script>

<template>
  <div class="container mx-auto px-8 font-sans">
    <TheNavbar />

    <!-- slider section -->
    <section class="main-slider mb-20">
      <div class="flex bg-indigo-dark text-white items-center">

        <!-- left column -->
        <div class="w-7/12">
          <img class="w-full" src="@/assets/imgs/2.jpg" alt="noodle-slider-img">
        </div>
        <!-- right column -->
        <div class="w-5/12 px-12">

          <div class="flex">
            <svg class="mr-4" data-name="feather-icon/trending-up" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 20 20">
              <rect data-name="Bounding Box" width="20" height="20" fill="rgba(255,255,255,0)"></rect>
              <path
                d="M.244,11.423a.834.834,0,0,1,0-1.178L6.494,3.994a.834.834,0,0,1,1.178,0L11.25,7.571l5.9-5.9H14.167a.833.833,0,1,1,0-1.667h5A.833.833,0,0,1,20,.833v5a.834.834,0,0,1-1.667,0V2.845L11.839,9.339a.834.834,0,0,1-1.179,0L7.083,5.761l-5.66,5.661a.834.834,0,0,1-1.179,0Z"
                transform="translate(0 4.167)" fill="#ff642f"></path>
            </svg>
            <span class="text-sm font-medium">85% would make this again</span>
          </div>

          <h1 class="text-5xl title font-bold font-recipeVegan my-5 leading-normal">Spicy Korean Devil Egg</h1>

          <p class="text-lg">
            Look no further for a creamy and ultra smooth
            classic cheesecake recipe! no one can deny its simple decadence.
          </p>
        </div>

      </div>
    </section>


    <!-- OUR VALUES SECION -->
    <section class="flex our--value mb-16">

      <div class="w-5/12">

        <div class="px-3 mb-16">

          <h1 class="title font-bold font-Alovera my-5 leading-none flex items-start justify-between text-indigo-400">
            <span class="
              inline-block 
              mt-2 mr-7 px-3 py-2.5 
              text-xl
              bg-yellow
              text-white
              rounded-xl">
              <font-awesome-icon :icon="['fas', 'gem']" />
            </span>

            Our Value to help you
          </h1>

          <p class="text-indigo-300 text-sm">
            We are here to provide the best value for your health and you. 
            Let's join us to know more.
          </p>

        </div>

        <div class="our-value-cards grid grid-cols-2 gap-4 gap-y-12">

          <div 
            v-for="(card, i) in helpCards" :key="i"
            class="
            p-6 pt-10 
            rounded-3xl 
            border border-white 
            relative"
            :class="[i===1 ? 'shadow-lg' : 'bg-indigo-100']"
          >

            <span 
            :class="[
              `inline-block px-3 
              py-2 
              rounded-xl
              text-xl
              text-white
              absolute
              top-0
              mt-[-22px] 
              ${i===1 ? 'bg-yellow' : 'bg-indigo-dark'}`
            ]"
            >
              <font-awesome-icon :icon="['fas', card.icon]" />
            </span>

            <h4 class="mb-2 font-bold text-indigo-400 text-indigo-400"> {{card.title}} </h4>
            <p class="text-xs text-indigo-300"> {{card.description}} </p>
          </div>


        </div>

      </div>

      <div class="w-7/12" >
        <div class="img-box bg-[#b1b0f1]">
          <img src="@/assets/imgs/chef.png" class="w-full" alt="chef">
        </div>
      </div>

    </section>


    <!-- recipes -->
    <HealthyMenu />
  </div>
</template>

