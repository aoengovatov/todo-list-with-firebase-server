import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useRequestGetTodos = (isSortTodos) => {
  const [todos, setTodos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const todosDbRef = ref(db, "todos");

  useEffect(() => {
    onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || {};
      console.log(loadedTodos);
      /*if (isSortTodos) {
        setTodos(
          loadedTodos.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
        );
      } else {
        setTodos(loadedTodos);
      }*/
      setTodos(loadedTodos);
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    todos,
  };
};
