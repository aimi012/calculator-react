import Link from "next/link"
import { useRouter } from "next/router"

function home (){
    const router = useRouter()

    const handleClick = () => {
        console.log('placing your order')
        router.push('/product')
    }
    return ( <div>
        <h1>home page</h1>
        <Link href ='/blog'>
            blog
        </Link>
        <Link href ='/product'>
            product
        </Link>
    </div>
    ) 
}

export default home