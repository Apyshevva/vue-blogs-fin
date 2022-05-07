<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { firestore } from '../firebase/config'

const router = useRouter();

const title = ref("");
const body = ref("");
const tag = ref("");
const tags = ref([]);

const handleAddTag = () => {
  tag.value = tag.value.replace(/\s/g, ""); // удаление пустых отступов

  if (
    !tags.value.includes(tag.value.toLowerCase()) &&
    !tag.value.includes(" ") &&
    tag.value
  ) {
    tags.value.push(tag.value.toLowerCase());
  }

  tag.value = "";
};

const handleSubmit = async () => {
  try {
    const newPost ={
      title: title.value,
      body: body.value,
      tags: tags.value,
    }
    await firestore.collection('posts').add(newPost)

    router.push("/");
  } catch (err) {
    console.log(err.message);
  }
};
</script>

<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Заголовок:</label>
      <input type="text" v-model="title" />
      <label>Контент: </label>
      <textarea v-model="body"></textarea>
      <label>Теги (Нажмите на Enter чтобы добавить тег)</label>
      <input type="text" v-model="tag" @keypress.enter.prevent="handleAddTag" />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button>Создать</button>
    </form>
  </div>
</template>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  padding: 2px 0;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  top: 0;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>