<script>
    export default{

        data(){
            return{
                active: 'Pizza',
                RecipeCategoies: [
                    {
                        title: 'Pizza',
                        icon: 'pizza-slice'
                    },
                    {
                        title: 'Dessert',
                        icon: 'pizza-slice'
                    },
                    {
                        title: 'Noodle',
                        icon: 'pizza-slice'
                    },
                    {
                        title: 'Coctail',
                        icon: 'pizza-slice'
                    },
                    {
                        title: 'Salad',
                        icon: 'pizza-slice'
                    },
                ]
            }
        },

        computed: {
            isActive() {
                return menu => menu === this.active;
            }
        }
        
    }
</script>

<template>
    <section class="mb-10">
        <!-- title -->
        <div class="px-3 mb-8 w-5/12">

            <h1 class="title font-Alovera font-bold leading-none flex items-start justify-between text-indigo-400 mb-5">
                <span class="
                    inline-block 
                    mt-1 mr-7 px-3 py-2.5 
                    text-xl
                    bg-indigo-dark
                    text-white
                    rounded-xl">
                    <font-awesome-icon :icon="['fa', 'gem']" />
                </span>

                Try Our Healthy Recipes
            </h1>

            <p class="text-indigo-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Natus similique quisquam recusandae vel officia 
                magni rem debitis error.
            </p>

        </div>

        <!-- Food categories -->
        <div class="flex">
            <div class="w-4/12 nav-tabs px-4" role="tablist" aria-orientation="vertical"> 

                <button 
                    v-for="(recipe, i) in RecipeCategoies" :key="i"
                    class="px-5 py-3 mb-3 font-bold text-indigo-400 text-sm tracking-[.2rem] 
                    w-11/12 text-left rounded-3xl border border-white"
                    :class="[isActive(recipe.title) ? 'shadow-lg bg-indigo-250' : 'bg-indigo-100']"
                >

                    <span class="
                        inline-block 
                        mt-2 mr-7 px-2 py-1.5 
                        text-sm
                        text-white
                        rounded-xl"
                        :class="[isActive(recipe.title) ? 'bg-yellow' : 'bg-indigo-dark' ]"
                        >

                        <font-awesome-icon :icon="['fa', recipe.icon]" />
                    </span>

                    {{recipe.title}}

                </button>
            </div>
        </div>
    </section>
</template>