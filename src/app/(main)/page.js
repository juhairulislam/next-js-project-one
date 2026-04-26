import LeftSideBar from "@/Components/homepage/news/LeftSideBar";
import RightSideBar from "@/Components/homepage/news/RightSideBar";
import Image from "next/image";


const Categories =async () =>{


  const res =await fetch('https://openapi.programming-hero.com/api/news/categories') ;

  const data =await res.json() ;

  return data.data ;

}
const newsCategoriesById =async (category_id) =>{


  const res =await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`) ;

  const data =await res.json() ;

  return data.data ;

}

export default async function Home() {

  const categories =await Categories()

  // console.log(categories)

  const newsCategories = await newsCategoriesById("04")

  console.log(newsCategories)


  return (
    <div className="grid grid-cols-12 gap-4 w-[85%] mx-auto my-[60px]" >
     

     <div className=" col-span-3">

 <LeftSideBar categories={categories} activeId={null}></LeftSideBar>



     </div>
     <div className="text-2xl bg-purple-100  font-bold col-span-6">
      All news
     </div>
     <div className=" col-span-3">

      <RightSideBar></RightSideBar>

     </div>

     
    </div>
  );
}
