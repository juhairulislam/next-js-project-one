import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RightSideBar = () => {
    return (
        <div>
            <h2 className='font-bold text-xl'>Login With</h2>
            <button className='btn w-full mt-4 text-blue-500'><FcGoogle />
                Login With Google</button>
            <button className='btn w-full my-2'><FaGithub />
                Login With Github</button>
        </div>
    );
};

export default RightSideBar;