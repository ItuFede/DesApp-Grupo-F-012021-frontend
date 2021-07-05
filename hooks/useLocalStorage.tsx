export const useLocalStorage = () => {
    const storageGet = (key: string) => {
        let item
        if (typeof window !== 'undefined') {
            item = window.localStorage.getItem(key);
        }

        if (item) {
            try {
                item = JSON.parse(item)
            } catch (error) {
                // console.warn('[useLocalStorage] ', `Element ${key} is not an object.`)
            }
        } 
        
        return item
    }

    const storageSet = (key: string, value: string) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, value)
        }
    }

    const storageDelete = (key: string) => {
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem(key)
        }
    }

    const storageClear = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.clear()
        }
    }

    return {
        storageGet,
        storageSet,
        storageDelete,
        storageClear
    }
}

