import { dataReview, getSummary, saveSummary } from "../db/database"
import { llmClient } from "../llm/client"
import template from "..llm\prompts\summerizeReviewPrompt.txt"





export const summeriseService = async (productId: number): Promise<string> => {
    const checkSummary =await getSummary(productId)
    if (checkSummary) {
        return checkSummary
    }
    const limit: number = 10
    const getDataReview = await dataReview(productId, limit)
    const joinedReviews = getDataReview.map(r => r.comment).join('\n\n')
    const prompt: string = template.replace("{{reviews}}", joinedReviews)

    const response = await llmClient({prompt})
    await saveSummary(productId, response.text)


    return (response.text)
}