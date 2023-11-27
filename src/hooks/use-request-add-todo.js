import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useRequestAddTodo = (value) => {
  const todosDbRef = ref(db, "todos");

  push(todosDbRef, { name: `${value.trim()}` }).then((response) => {
    console.log("Новая задача добавлена, ответ сервера:", response);
  });
};
