import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const useRequestUpdateTodo = (id, name) => {
  const todoDbRef = ref(db, `todos/${id}`);

  set(todoDbRef, { name: `${name.trim()}` }).then((response) => {
    console.log("Задача обновлена, ответ сервера:", response);
  });
};
