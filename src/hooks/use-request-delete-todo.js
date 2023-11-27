export const useRequestDeleteTodo = (id, setRefreshTodos, refreshTodos) => {
  fetch(`http://localhost:3005/todos/${id}`, {
    method: "DELETE",
  })
    .then((rawResponse) => rawResponse.json())
    .then((response) => {
      console.log("Задача удалена, ответ сервера: ", response);
      setRefreshTodos(!refreshTodos);
    });
};
