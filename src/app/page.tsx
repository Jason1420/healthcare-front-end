'use client'
import Banner from '@/components/banner/Banner'
import Content from '@/components/content/Content'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Navbar from '@/components/navbar/Navbar'
import '../i18n/i18n'
import SearchBar from '@/components/searchBar/SearchBar'
import CustomScrollbars from '@/components/CustomScrollbars/CustomScrollbars'
export default function Home() {
  const handleButton = () => {
    alert("clicked")
  }
  return (
    <CustomScrollbars universal style={{ height: "100vh" }}>
      <div className=" font-Noto flex flex-col ">
        <Header />
        <Navbar />
        <Banner />
        <SearchBar />
        <Content />
        {/* <Footer /> */}
      </div>
    </CustomScrollbars>
  )
}
