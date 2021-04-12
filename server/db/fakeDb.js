import { generateId } from "../utils/GeneratedId"

class FakeDb {
    burgers = [{ name: 'CheeseBurger', description: "It's got cheese", id: generateId() }, { name: 'Krabby Patty', description: "No one knows what's in it", id: generateId() }]
}

export const fakeDb = new FakeDb()