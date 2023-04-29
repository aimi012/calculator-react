import { useRouter } from "next/router"

function productDetail (){
    const router = useRouter()
    const productid = router.query.productid
    return <h1>detail about product {productid}</h1>
}

export default productDetail