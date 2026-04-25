import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
  {
    "id": 1,
    "title": "Bangladesh Launches Nationwide Digital Education Program."
  },
  {
    "id": 2,
    "title": "Global Tech Leaders Announce Breakthrough in AI Innovation."
  },
  {
    "id": 3,
    "title": "Economic Growth Shows Positive Trend in South Asia."
  },
  {
    "id": 4,
    "title": "New Environmental Policy Targets Climate Change Impact."
  },
  {
    "id": 5,
    "title": "Youth Entrepreneurship on the Rise in Urban Areas."
  }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 p-4 w-[85%] mx-auto'>

            <button className='btn bg-pink-500 text-white'>Breaking News</button>
            <Marquee pauseOnHover={true} speed={30}>
               {
                news.map(n => <span key={n.id} className='mx-8'>
                    {n.title}

                </span>)
               }
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;