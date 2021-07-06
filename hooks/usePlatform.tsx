import axios from "axios"
import { environment } from "../environments/environment.dev"
import { useLocalStorage } from "./useLocalStorage"

export const usePlatform = () => {
    const {storageSet, storageGet} = useLocalStorage()

    const getPlatforms: () => Promise<any[]> = async() => {
        let platforms: any[] = storageGet('platforms')
        if(!platforms) {
            platforms = await (await axios.get(`${environment.API_URL}platform`)).data
                .map((p) => p.name)
            storageSet('platforms', JSON.stringify(platforms))
        }
        return platforms;
    }

    return({
        getPlatforms
    })
}
