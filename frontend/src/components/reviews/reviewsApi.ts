import axios from "axios"


export type Review = {
    id: number
    author: string
    rating: number
    comment: string
    createdAt: number
    expireAt: string
}

export type getReviewResponse = {
    summary: string
    reviews: Review[]
}

export type Props = {
    productId: number
}

export type GetSummaryResponse = {
    summary: string
}


export const ReviewsApi = {

    async summeriseReviews (productId: number){
        const { data } = await axios.post<GetSummaryResponse>(`api/products/${productId}/summerize`)

        return data
    },

    async fetchReviews (productId: number){
        const {data} = await axios.get<getReviewResponse>(`api/products/${productId}/reviews`);
        console.log(data)
      
      return data
    }
}