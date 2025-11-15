import { PrismaClient } from "@prisma/client";
import type { Review } from "../generated/prisma/client";
import dayjs from "dayjs";



export const prisma = new PrismaClient()

export const saveSummary = async(productId: number, summary: string ) =>{
    const now = new Date()
    const expireAt = dayjs().add(7, 'days').toDate()
    await prisma.reviewSummary.upsert({
        where: {productID: productId},
        create: {
            content: summary,
            generatedAt: now,
            expireAt,
            productID: productId
        },
        update: {
            content: summary,
            expireAt,
            generatedAt: now,
            productID: productId
        }
    })
}

export const getProduct = async(productId: number) =>{
    return await prisma.product.findUnique({where: { id: productId }})
}

export const dataReview = async(productId: number, limit?: number):Promise<Review[]>=>{
    const response = await prisma.review.findMany({
            where: { productID: productId },
            orderBy: {date: "desc"},
            take: limit
        })
        return (response)
}

export const getSummary = async(productID: number):Promise<string | null>=>{
    const summary = await prisma.reviewSummary.findFirst({
        where: {
            AND: [
                {productID},
                {expireAt: {gt: new Date()}}
            ]
        }
    })
    return summary? summary.content : null
}

