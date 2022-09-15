<script>
    import { useRecipes } from '@/stores/recipe'
    export default{

        data(){
            return{
                activeRecipe: 'Pizza',
                RecipeCategoies: [
                    {
                        title: 'Pizza',
                        icon: 'pizza-slice'
                    },
                    {
                        title: 'Dessert',
                        icon: 'cookie'
                    },
                    {
                        title: 'Noodle',
                        icon: 'brain'
                    },
                    {
                        title: 'Coctail',
                        icon: 'pizza-slice'
                    },
                    {
                        title: 'Salad',
                        icon: 'pizza-slice'
                    },
                ],

                recipe: null,
            }
        },

        computed: {
            isActive() {
                return menu => menu === this.activeRecipe;
            },
            recipeResult(){
                return this.recipe[0];
            }
        },

        methods: {
            async fetchData(){
                // define store
                let recipeStore = useRecipes();
                await recipeStore.fetchRecipes();
                let data = recipeStore.getRecipes;
                let stringifyRec = JSON.stringify(data);
                let parseyRec = JSON.parse(stringifyRec);
                console.log(data, "data")
                console.log(stringifyRec, "stringify")
                console.log(parseyRec,"parse")
                this.recipe = parseyRec;
            }
        },

        mounted(){
            this.fetchData()
        }
        
    }

</script>

<template>
    <section class="mb-10">

        <!-- title -->
        <div class="px-3 mb-10 w-5/12">

            <!-- {{ recipe[0] }} -->

            <h1 class="title font-Alovera font-bold leading-none flex items-start justify-between text-indigo-400 mb-5">
                <span class="
                    inline-block 
                    mt-1 mr-7 px-3 py-2.5 
                    text-xl
                    bg-indigo-dark
                    text-white
                    rounded-xl">
                    <font-awesome-icon :icon="['fas', 'gem']" />
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

                        <font-awesome-icon :icon="['fas', recipe.icon]" />
                    </span>

                    {{recipe.title}}

                </button>
            </div>

            <div class="w-8/12 tab-content">
                <div class="flex px-10 mb-7">
                    <!-- card -->
                    <div class="flex bg-white shadow-light-indigo w-full rounded-xl overflow-hidden">
                        
                        <div class="card-img w-7/12"> 
                            <img class="w-full h-full" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTAzOTR8MHwxfHNlYXJjaHwxfHxwaXp6YXxlbnwwfHx8fDE2NjMwOTQ2NDI&ixlib=rb-1.2.1&q=80&w=400" alt="pizza img">
                        </div>

                        <div class="card-body text-center my-auto">
                            <p class="text-indigo-400 text-base mb-5">
                                Lorem, ipsum dolor sit amet consectetur.
                            </p>
                            
                            <a href="#" 
                            class="px-5 inline-block py-3 text-white bg-yellow
                            text-sm tracking-[.2rem] rounded-2xl border border-white 
                            font-bold "
                            @click.prevent="fetchData()"
                            > See Detail </a>
                        </div>

                    </div>

                </div>
                <div class="text-center">
                    <a :href=" `/category/pizzaburger` " 
                        class="px-5 inline-block py-3 text-white bg-indigo-400
                        text-xs tracking-[.2rem] hover:opacity-90"
                    > View all </a>
                </div>
            </div>
        </div>
    </section>
</template>