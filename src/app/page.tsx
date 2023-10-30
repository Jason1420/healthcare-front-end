'use client'
import Content from '@/components/content/Content'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

export default function Home() {
  const handleButton = () => {
    alert("clicked")
  }
  return (
    <div className=" font-Noto">
      <Header />
      {/* <Content /> */}
      {/* <Footer /> */}
    </div>
  )
}
