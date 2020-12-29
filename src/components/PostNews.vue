<template> 
<div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">UserID</th>
      <th scope="col">ID_Post</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(post,index) in all" :key="index">
      <th scope="row">{{post.userId}}</th>
      <td>{{post.id}}</td>
      <td>{{post.title}}</td>
      <td width="50%"><input type="text" v-model="post.body" :disabled="disabled == 0" v-on:keyup.13="update(post,$event)"></td>
      <td><button class="btn btn-success" @click="disabled = (disabled + 1) % 2">👀</button><button @click="deletePost(post.id)" class="btn btn-danger">🗑</button></td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'
export default {
    name:"Posts",
    data(){
        return{
            disabled:0
        }
    },
    computed:{
        ...mapGetters({
          all:'post/allPost'
        }),
        // ...mapState({
        //     posts: state => state.post.posts
        // })

    },
    mounted(){
        this.$store.dispatch('post/getPost')
    },
    methods:{
        ...mapActions({deletePost:'post/deletePost',updateNow:'post/updateNews'}),
    update(post,e) {
      this.disabled =0
       this.updPost = {
         userId: post.userId,
        id : post.id,
        title: post.title,
        body: e.target.value
        
      };
      this.updateNow(this.updPost);
     
    }
    }
} 
</script>
<style>  
input{
    width: 100%;
}
</style>