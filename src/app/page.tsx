'use client'
import Banner from '@/components/banner/Banner'
import Content from '@/components/content/Content'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Navbar from '@/components/navbar/Navbar'

export default function Home() {
  const handleButton = () => {
    alert("clicked")
  }
  return (
    <div className=" font-Noto">
      <Header />
      <Navbar />
      <Banner />
      {/* <Content /> */}
      {/* <Footer /> */}
    </div>
  )
}
