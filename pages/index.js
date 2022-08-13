import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Items from '../components/Items'
import Navbar from '../components/Navbar'
import Sponsers from '../components/Sponsers'
import styles from '../styles/Home.module.css'



const freshRecomendation = [
  {id:1, title: "New A1 House", 
  image: "https://s.alicdn.com/@sc04/kf/H1ab4303b97d543f8b7ba7a640bf3221d2.jpg_300x300.jpg",
  price:"RS 16,000",
   desc:"We have a best servises for you",
  featured:true, isLike: true},
  {id:2, title: "New Mobile S3",  
   image: "https://images.olx.com.pk/thumbnails/232228500-240x180.webp", 
   price:"RS 32,000",
   desc:"Hill Park, Karachi 2 Weeks ago",
  featured:true, isLike: false},
  {id:3, title: "Worlds best Sofa", 
  image: "https://images.olx.com.pk/thumbnails/153991223-240x180.webp", 
  price:"RS 92,000",
  desc:"we have a very best sofas ",
  featured:true},
  {id:4, title: "home for rent", 
  image: "https://images.olx.com.pk/thumbnails/181502436-240x180.webp", 
  desc:"Interrior houses scheme ",
  price:"RS 120,000",
   featured:true},
   {id:5, title: "Worlds best Sofa", 
  image: "https://images.olx.com.pk/thumbnails/230332012-240x180.webp", 
  price:"RS 92,000",
  desc:"we have a very best sofas  zain",
  featured:true},
  {id:6, title: "home for rent", 
  image: "https://images.olx.com.pk/thumbnails/133199869-240x180.webp", 
  desc:"Interrior houses scheme ",
  price:"RS 120,000",
   featured:true},
   {id:7, title: "Worlds best Sofa", 
   image: "https://images.olx.com.pk/thumbnails/153991223-240x180.webp", 
   price:"RS 92,000",
   desc:"we have a very best sofas ",
   featured:true},
   {id:8, title: "home for rent", 
   image: "https://images.olx.com.pk/thumbnails/232682724-240x180.webp", 
   desc:"Interrior houses scheme ",
   price:"RS 120,000",
    featured:true},
    {id:9, title: "New A1 House", 
  image: "https://images.olx.com.pk/thumbnails/233122776-240x180.webp",
  price:"RS 16,000",
   desc:"We have a best servises for you",
  featured:true, isLike: true},
  {id:10, title: "New Mobile S3",  
   image: "https://images.olx.com.pk/thumbnails/233123975-240x180.webp", 
   price:"RS 32,000",
   desc:"Hill Park, Karachi 2 Weeks ago",
  featured:true, isLike: false},
  {id:11, title: "Worlds best Sofa", 
  image: "https://images.olx.com.pk/thumbnails/233122776-240x180.webp", 
  price:"RS 92,000",
  desc:"we have a very best sofas ",
  featured:true},
  {id:12, title: "home for rent", 
  image: "https://images.olx.com.pk/thumbnails/181502436-240x180.webp", 
  desc:"Interrior houses scheme ",
  price:"RS 120,000",
   featured:true},
   {id:13, title: "Worlds best Sofa", 
  image: "https://images.olx.com.pk/thumbnails/233122762-240x180.webp", 
  price:"RS 92,000",
  desc:"we have a very best sofas ",
  featured:true},
  {id:14, title: "home for rent", 
  image: "https://images.olx.com.pk/thumbnails/229543447-240x180.webp", 
  desc:"Interrior houses scheme ",
  price:"RS 120,000",
   featured:true},
   {id:15, title: "Worlds best Sofa", 
   image: "https://images.olx.com.pk/thumbnails/231425430-240x180.webp", 
   price:"RS 92,000",
   desc:"we have a very best sofas ",
   featured:true},
   {id:16, title: "home for rent", 
   image: "https://s.alicdn.com/@sc04/kf/H3fea32b92d7648d9a3a06ee12d66374eH.jpg_300x300.jpg", 
   desc:"Interrior houses scheme ",
   price:"RS 120,000",
    featured:true},
    {id:17, title: "New A1 House", 
    image: "https://images.olx.com.pk/thumbnails/233095287-240x180.webp",
    price:"RS 16,000",
     desc:"We have a best servises for you",
    featured:true, isLike: true},
    {id:18, title: "New Mobile S3",  
     image: "https://images.olx.com.pk/thumbnails/228188289-240x180.webp", 
     price:"RS 32,000",
     desc:"Hill Park, Karachi 2 Weeks ago",
    featured:true, isLike: false},
    {id:19, title: "Worlds best Sofa", 
    image: "https://images.olx.com.pk/thumbnails/153991223-240x180.webp", 
    price:"RS 92,000",
    desc:"we have a very best sofas ",
    featured:true},
    {id:20, title: "home for rent", 
    image: "https://images.olx.com.pk/thumbnails/108201085-240x180.webp", 
    desc:"Interrior houses scheme ",
    price:"RS 120,000",
     featured:true},
     {id:21, title: "Worlds best Sofa", 
    image: "https://s.alicdn.com/@sc04/kf/H6e6761e296584728a98f9cba5de3a818e.jpg_300x300.jpg", 
    price:"RS 92,000",
    desc:"we have a very best sofas ",
    featured:true}
   
 
 
]





export default function Home() {
 
  
  return (
    <>
    <div>
      <Head>
        <title>Olx Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Header/>
<div className='bg-[#FFFFFF]'>
  <Navbar/>
  <h1 className='text-2xl font-bold sm:font-normal sm:text-3xl text-[#002F34] pl-16 pt-4'>
          Fresh recommendations</h1>
        
          <div className='ml-11 lg:mx-16 gap-x-80 lg:gap-x-1 gap-y-4 mt-6 grid grid-rows-4 grid-cols-4
           lg:grid-rows-2 sm:grid-cols-4'>
         
  {freshRecomendation?.map((item)=>(
    <Categories {...item}/>
    ))}
    </div>
  
  {/* <Services/>
  <Product/>
  <Items/>
  <Famous/> */}
  <Sponsers/>
  <Footer/>
</div>
    </div>


    </>
  )
}