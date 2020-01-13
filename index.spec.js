const moxios = require("moxios")
const { sumTodos } = require("./todos")

describe("Todo Tests", () => {
  beforeEach(() => {
    moxios.install()
  })

  it("should return 3 items", async () => {
    moxios.stubRequest("https://jsonplaceholder.typicode.com/todos", {
      status: 200,
      response: [{ name: "item A" }, { name: "item B" }, { name: "item C" }]
    })

    expect(await sumTodos()).toBe(3)
  })

  afterEach(() =>  {
    moxios.uninstall()
  })
})
