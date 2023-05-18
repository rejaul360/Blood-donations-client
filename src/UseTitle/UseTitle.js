import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `ToyZone | ${title}`
    }, [title])
}
export default useTitle;