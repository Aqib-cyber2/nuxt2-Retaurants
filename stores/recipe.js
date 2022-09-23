import { defineStore } from 'pinia'

export const useRecipes = defineStore('recipeStore',{
  state: () => {
    return {
      recipes: []
    }
  },
  getters: {
    getRecipes(state) { return state.recipes.results },
  },

  actions: {

    async fetchRecipes() {
      let data = await fetch('https://api.unsplash.com/search/photos?query=pizza&client_id=cKakzKM1cx44BUYBnEIrrgN_gnGqt81UcE7GstJEils')
      let res = await data.json();
      this.recipes = res
    },

  },
})