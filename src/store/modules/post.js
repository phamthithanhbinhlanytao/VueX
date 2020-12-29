import axios from "axios"

const state = {
    posts: []
  }
  
  const getters = {
    totalPost: state =>{
            return state.posts.length
        },
        allPost: state => state.posts
  }
  
  const actions = {
    async getPost({commit}, data) {
        await axios.get('https://jsonplaceholder.typicode.com/posts', data).then((res) => {
          console.log(res)
          commit('setPost', res.data)
        })
      },
      async deletePost({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        alert(`Id ${id} đã được xóa `),
        commit('removePost', id);
      },
      async updateNews({ commit }, updPost) {
        const response = await axios.put(
          'https://jsonplaceholder.typicode.com/todos/'+updPost.id,
          updPost
        );
    
        console.log(response.data);
    
        commit('updatePost', response.data);
      }
    }
  
  const mutations = {
    setPost(state, data) {
        state.posts = data
      },
      removePost: (state, id) =>
    (state.posts = state.posts.filter(post => post.id !== id)),
      
    updatePost: (state, updPost) => {
      const index = state.posts.findIndex(post => post.id === updPost.id);
      if (index !== -1) {
        state.posts.splice(index, 1, updPost);
      }
    }
  }

  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }