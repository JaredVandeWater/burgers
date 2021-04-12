import { fakeDb } from "../db/FakeDb";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GeneratedId";

class BurgersService {
    async find(query = {}) {
        // let values = await dbContext.Values.find(query);
        return fakeDb.burgers
    }


    async findById(id) {
        let burger = await fakeDb.burgers.find(b => b.id === id);
        if (!burger) {
            throw new BadRequest("Invalid Id");
        }
        return burger;
    }


    delete(id) {
        let value = fakeDb.burgers.find(b => b.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id Casting Failed")
        }
        fakeDb.burgers = fakeDb.burgers.filter(b => b.id !== id)
    }

    create(newBurger) {
        newBurger.id = generateId()
        fakeDb.burgers.push(newBurger)
        return newBurger
    }

}

export const burgersService = new BurgersService();