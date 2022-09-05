<template>
  <div class="container mx-auto px-8 font-sans">
    <TheNavbar />

    <!-- slider section -->
    <section class="main-slider mb-20">
      <div class="flex bg-indigo text-white items-center">

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

          <h1 class="text-5xl title font-bold my-5 leading-normal">Spicy Korean Devil Egg</h1>

          <p class="text-lg">
            Look no further for a creamy and ultra smooth
            classic cheesecake recipe! no one can deny its simple decadence.
          </p>
        </div>

      </div>
    </section>


    <!-- OUR VALUES SECION -->
    <section class="flex our--value">

      <div class="w-5/12">

        <div class="px-3 mb-10">

          <h1 class="title font-bold my-5 leading-none flex items-start justify-between">
            <span class="inline-block mt-2 mr-7 px-3 py-3 icon-box rounded-xl text-orange-500">
              <font-awesome-icon :icon="['fa', 'gem']" />
            </span>

            Our Value to help you
          </h1>

          <p>
            We are here to provide the best value for your health and you. 
            Let's join us to know more.
          </p>

        </div>

        <div class="our-value-cards grid grid-cols-2 gap-4 gap-y-10">

          <div class="border p-6 pt-10 bg-blue-50 rounded-3xl border border-white relative">

            <span class="
              inline-block px-3 
              py-2 
              rounded-xl
              text-xl
              bg-[#a083f2]
              text-white
              absolute
              top-0
              mt-[-22px]
            ">
              <font-awesome-icon :icon="['fa', 'heart']" />
            </span>

            <h4 class="mb-2 font-bold">Becomes Healthier</h4>
            <p> Immuniy will stronger if the body is healthier </p>
          </div>

          <div class="border p-6 pt-10 bg-blue-50 rounded-3xl border border-white relative">

            <span class="
              inline-block px-3 
              py-2
              rounded-xl
              text-xl
              bg-yellow
              text-white
              absolute
              top-0
              mt-[-22px]
            ">
              <font-awesome-icon :icon="['fa', 'bolt']" />
            </span>

            <h4 class="mb-2 font-bold">Increase Energy</h4>
            <p> Immuniy will stronger if the body is healthier </p>
          </div>

          <div class="border p-6 pt-10 bg-blue-50 rounded-3xl border border-white relative">

            <span class="
              inline-block px-3 
              py-2
              rounded-xl
              text-xl
              bg-[#a083f2]
              text-white
              absolute
              top-0
              mt-[-22px]
            ">
              <font-awesome-icon :icon="['fa', 'lock']" />
            </span>

            <h4 class="mb-2 font-bold">Controlling weight</h4>
            <p> Immuniy will stronger if the body is healthier </p>
          </div>

          <div class="border p-6 pt-10 bg-blue-50 rounded-xl border border-white relative">

            <span class="
              inline-block px-3 
              py-2
              rounded-xl
              text-xl
              bg-[#a083f2]
              text-white
              absolute
              top-0
              mt-[-22px]
            ">
              <font-awesome-icon :icon="['fa', 'star']" />
            </span>

            <h4 class="mb-2 font-bold">Becomes Happier</h4>
            <p> Immuniy will stronger if the body is healthier </p>
          </div>


        </div>

      </div>

      <div class="w-7/12">
        <div class="img-box bg-[#b1b0f1]">
          <img src="@/assets/imgs/chef.png" class="w-full" alt="chef">
        </div>
      </div>

    </section>
  </div>
</template>

<style lang="sass">

</style>