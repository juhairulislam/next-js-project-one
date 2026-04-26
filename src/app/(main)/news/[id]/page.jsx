import React from 'react';

const DetailsPage =async ({params}) => {

    const {id} = await params ;

    console.log(id)

    return (
        <div className='w-[85%] mx-auto'>
            
        </div>
    );
};

export default DetailsPage;