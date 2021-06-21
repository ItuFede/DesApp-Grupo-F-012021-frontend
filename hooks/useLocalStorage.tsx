export const useLocalStorage = () => {
    const storageGet = (key: string) => {
        let item
        if (typeof window !== 'undefined') {
            item = window.localStorage.getItem(key);
        }

        if (item) {
            item = JSON.parse(item)
        } 
        console.log(`Get item ${key}: `, item?.id)
        return item
    }

    const storageSet = (key: string, value: string) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, value)
        }
    }

    return {
        storageGet,
        storageSet
    }
}

