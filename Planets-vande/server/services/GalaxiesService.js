import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find()

        return galaxies
    }

    async getGalaxyById(galaxyId) {
        const galaxy = await dbContext.Galaxies.findById(galaxyId)

        return galaxy
    }

    async createGalaxies(galaxyData) {
        const newGalaxy = await dbContext.Galaxies.create(galaxyData)

        return newGalaxy
    }

}

export const galaxiesService = new GalaxiesService