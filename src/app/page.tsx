'use client'
import { Endpoint } from '@/routes/Route'
import { redirect } from 'next/navigation'
const Home = () => {
    redirect(Endpoint.HOME)
    return (
        <div className=" font-Noto flex flex-col ">
        </div>

    )
}
export default Home;