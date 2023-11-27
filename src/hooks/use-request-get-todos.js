import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useRequestGetTodos = () => {
  const [todos, setTodos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [todosSorted, setTodosSorted] = useState({});
  const todosDbRef = ref(db, "todos");

  useEffect(() => {
    onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || {};

      setTodos(loadedTodos);
      let sortedTodos = [];
      Object.entries(loadedTodos).map(([id, { name }]) =>
        sortedTodos.push({ id: `${id}`, name: `${name}` })
      );
      setTodosSorted(
        sortedTodos.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        )
      );
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    todos,
    todosSorted,
  };
};
