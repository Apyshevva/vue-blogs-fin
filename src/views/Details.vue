<template>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-if="error">{{ error }}</div>
  <div v-if="!error && !post"><Spinner /></div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    const { post, error, fetchPost } = getPost();

    onMounted(() => {
      fetchPost(props.id);
    });

    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.props p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>