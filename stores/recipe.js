import { defineStore } from 'pinia'

export const useRecipes = defineStore('recipeStore',{
  state: () => {
    return {
      recipes: []
    }
  },

  getters: {
    getRecipes(state){
      return state.recipes;
    }
  },

  actions: {

    async fetchRecipes() {
  
      let todos = await $fetch('https://api.unsplash.com/search/photos?query=pizza&client_id=cKakzKM1cx44BUYBnEIrrgN_gnGqt81UcE7GstJEils')
      this.recipes = todos.results;
      return todos;
      // return todos.results;
      // .then(res=>{
      //   this.recipes = res.results;
      //   // console.log(this.recipes)
      // })
      // .catch(err=>{
      //   console.log(err)
      // })

      // webstorm
    },

  },
})