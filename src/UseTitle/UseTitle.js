import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Blood Donations | ${title}`
    }, [title])
}
export default useTitle;