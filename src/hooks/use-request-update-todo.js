export const useRequestUpdateTodo = (
  id,
  name,
  setRefreshTodos,
  refreshTodos
) => {
  fetch(`http://localhost:3005/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      name: `${name.trim()}`,
    }),
  })
    .then((rawResponse) => rawResponse.json())
    .then((response) => {
      console.log("Задача обновлена, ответ сервера:", response);
      setRefreshTodos(!refreshTodos);
    });
};
