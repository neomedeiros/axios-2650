const axios = require("axios").default

const sumTodos = async function() {
  const todoRequest = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  )

  return todoRequest.data.length
}

module.exports = { sumTodos }
