import { ref } from "vue";
import { firestore } from "../../firebase/config";

const getPost = () => {
  const post = ref(null);
  const error = ref(null);

  const fetchPost = async (id) => {
    try {
      const response = await fetch("http://localhost:3001/posts/" + id); // получили данные из бека
      
      post.value = { ...response.data()}

      post.value = json; // записываем в наш post полученные данные
      error.value = null
    } catch (err) {
      error.value = err.message;
    }
  }

  return { post, error, fetchPost };
};

export default getPost