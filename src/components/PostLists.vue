<template>
  <div v-show="posts.length > 0">
    <h3>Список пользователей</h3>
    <post-item
        :post="post"
        v-for="post in posts"
        v-bind:key="post.id"
        @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-show="posts.length === 0" style="color: red">
    Список пользователей пуст
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props:{
  posts:{
    type: Array,
    required: true
  }
}
}
</script>

<style scoped>

</style>