export const useRequestAddTodo = (value, setRefreshTodos, refreshTodos) => {
  fetch("http://localhost:3005/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      name: `${value.trim()}`,
    }),
  })
    .then((rawResponse) => rawResponse.json())
    .then((response) => {
      console.log("Новая задача добавлена, ответ сервера:", response);
      setRefreshTodos(!refreshTodos);
    });
};
