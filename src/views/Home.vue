<template>
  <div>
    <div v-if="posts?.length" class="grid">
      <PostsList :posts="posts" />
      <TagsCloud :posts="posts" />
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="!error && !posts.length"><Spinner /></div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList.vue";
import { onMounted } from "@vue/runtime-core";
import getPosts from "@/composables/getPosts.js";
import Spinner from "../components/Spinner.vue";
import TagsCloud from "../components/TagsCloud.vue";
export default {
  components: { PostsList, Spinner, TagsCloud },
  setup() {
    const { posts, error, fetchPosts } = getPosts();

    onMounted(() => fetchPosts());
    return { posts, error };
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>