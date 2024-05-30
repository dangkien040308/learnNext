import { notFound } from "next/navigation"
export default function Review({params}) {
    if (parseInt(params.reviewID) > 1000) {
        return notFound()
    }
    return (
        <div>
            Review {params.reviewID} for product {params.productID}
        </div>
    )
}