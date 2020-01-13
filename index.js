const { sumTodos } = require("./todos")

const execute = async () => {
  const sum = await sumTodos()

  console.log(sum)
}

execute()
