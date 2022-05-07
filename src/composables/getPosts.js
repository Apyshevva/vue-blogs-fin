import { ref } from "vue";
import { firestore } from '../firebase/config'

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const fetchPosts = async () => {
    try {
      const response = await firestore.collection('posts').get()

      response.docs.forEach(doc => {
        posts.value.push({ ...doc.data(), id: doc.id})
      });

    } catch (err) {
      error.value = err.message;
    }
  }

  return { posts, error, fetchPosts };
};

export default getPosts