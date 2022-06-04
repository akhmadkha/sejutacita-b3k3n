import axios from "utils/axios"

export const getCategory = async () => {
    try {
        const response = await axios.get("/fee-assessment-categories")
        console.log(response)
        return response
    } catch (error) {
        throw error
    }
}

export const getBooks = async (props) => {
    try {
        const {categoryId, page, size} = props
        // console.log(props)
        const response = await axios.get(
            "/fee-assessment-books" +
            `?categoryId=${categoryId ?? 1}` +
            `&page=${page ?? 1}`
            )
        console.log(response)
        return response
    } catch (error) {
        throw error
    }
}