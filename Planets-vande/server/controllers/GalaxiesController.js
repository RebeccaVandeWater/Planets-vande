import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')

        this.router

            .get('', this.getGalaxies)

            .get('/:id', this.getGalaxyById)

            .post('', this.createGalaxies)
    }
    async getGalaxies(req, res, next) {
        try {
            const galaxies = await galaxiesService.getGalaxies()

            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxyById(req, res, next) {
        try {
            const galaxyId = req.params.id

            const galaxy = await galaxiesService.getGalaxyById(galaxyId)

            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxies(req, res, next) {
        try {
            const galaxyData = req.body

            const newGalaxy = await galaxiesService.createGalaxies(galaxyData)

            return res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }
}