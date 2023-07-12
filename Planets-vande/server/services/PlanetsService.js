import { dbContext } from "../db/DbContext.js"
import { galaxiesService } from "./GalaxiesService.js"

class PlanetsService {
    async getPlanets() {
        const planets = await dbContext.Planets.find()

        return planets
    }

    async createPlanets(planetData) {
        await galaxiesService.getGalaxyById(planetData.galaxyId)

        const newPlanet = await dbContext.Planets.create(planetData)

        return newPlanet
    }

}

export const planetsService = new PlanetsService