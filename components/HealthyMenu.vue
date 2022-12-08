<script setup>
    import { useRecipes } from '~~/stores/recipe';
    let recipeStore = useRecipes();
    let totalRecipes = ref([])

    // fecthing recipes when component loaded
    recipeStore.fetchRecipes().then((e)=>{
        totalRecipes.value = e.results;
        console.log(totalRecipes.value)
    });


    // console.log(totalRecipes) 

    const activeRecipe = ref('Pizza'); // for active tabs
    const category = ref('pizza') // category to fetc data of same route
    const RecipeCategoies = ref([
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
    ])


    // computed properties
    const isActive = computed(()=>{
        return (par)=>{
            if(activeRecipe.value == par)
                return true
            else {
                return false;
            }
        }
    } )

    function toggleActiveTab(tab){
      category.value = tab.toLowerCase();
      activeRecipe.value = tab;
    }
   
</script>

<template>
    <section class="mb-10">
        <!-- title -->
        <div class="px-3 mb-10 w-5/12">

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
                <!-- {{recipeStore}} -->
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
                    @click="toggleActiveTab(recipe.title)"
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
                            > See Detail </a>
                        </div>

                    </div>

                </div>
                <div class="text-center">
                    <!-- <a :href="`/category/${category}` " 
                        
                        
                    > View all </a> -->
                    <NuxtLink class="px-5 inline-block py-3 text-white bg-indigo-400
                        text-xs tracking-[.2rem] hover:opacity-90" to="/category/" +category >About</NuxtLink>
                    <!-- <router-link to='/category/' + category></router-link> -->
                </div>
            </div>
        </div>
    </section>
</template>