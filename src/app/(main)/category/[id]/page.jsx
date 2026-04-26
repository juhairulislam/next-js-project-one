import LeftSideBar from '@/Components/homepage/news/LeftSideBar';
import RightSideBar from '@/Components/homepage/news/RightSideBar';
import React from 'react';



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

const NewsCategoryPage =async ({params}) => {

        const {id} = await params ;


  const categories =await Categories()

  // console.log(categories)

  const news = await newsCategoriesById(id)

  // console.log(newsCategories)




    return (
        <div className="grid grid-cols-12 gap-4 w-[85%] mx-auto my-[60px]" >
     

     <div className=" col-span-3">

 <LeftSideBar categories={categories} activeId={id}></LeftSideBar>



     </div>
     <div className=" col-span-6">

      <h1 className="text-xl font-bold">

        All news
        
        </h1>     

      <div className="space-y-4">

      {
        news.length > 0 ?
        news.map(n => <div key={n._id} className="p-6 rounded-md border">

          <h1>{n.title}</h1>
        </div>) : <h1 className='text-4xl font-bold text-center text-slate-400 mt-[25%]'>No News Found</h1>
      }

      </div>

     </div>
     <div className=" col-span-3">

      <RightSideBar></RightSideBar>

     </div>

     
    </div>
    );
};

export default NewsCategoryPage;