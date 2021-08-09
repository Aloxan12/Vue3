<template>
  <div class="app">
    <post-form @create="createPost"/>
    <post-lists
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostLists from "@/components/PostLists";
export default {
  components:{
    PostForm, PostLists
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Java Script', body: 'Описание поста 1'},
        {id: 2, title: 'React', body: 'Описание поста 2'},
        {id: 3, title: 'Vue3', body: 'Описание поста 3'},
      ],
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
    },
    removePost(post){
      this.posts = this.posts.filter(p=> p.id !== post.id)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
</style>