<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="filteredTags.length" class="grid">
    <PostsList :posts="filteredTags" />
    <TagsCloud :posts="posts"/>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import PostsList from "../components/PostsList.vue";
import { computed, onMounted } from "@vue/runtime-core";
import getPosts from "@/composables/getPosts.js";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
import TagsCloud from "../components/TagsCloud.vue";
export default {
  components: { PostsList, Spinner,TagsCloud },
  setup() {
    const route = useRoute();
    const { posts, error, fetchPosts } = getPosts();

    const filteredTags = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    onMounted(() => fetchPosts());
    return { posts, error, filteredTags };
  },
};
</script>

<style>
</style>