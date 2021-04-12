import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";

export class BurgersController extends BaseController {
    constructor() {
        super("api/burgers");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .get("/:id", this.getOne)
            .delete("/:id", this.delete)
    }
    //REVIEW not sure why this has a _ and not a req
    async getAll(_, res, next) {
        try {
            const burgers = await burgersService.find()
            return res.send(burgers);
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await burgersService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
    async getOne(req, res, next) {
        try {
            const values = await burgersService.findById(req.params.id)
            return res.send(values);
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            let data = await burgersService.delete(req.params.id)
            res.send("<h1>Burger Trashed</h1>")
        } catch (error) {
            next(error);
        }
    }
}
