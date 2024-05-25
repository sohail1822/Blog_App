import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div>
            <Header />
            <div className='  gap-x-20'>
                <div className='border-2 border-gray-300 py-1 px-4 rounded-md mt-[80px] ml-[80px] inline-block'>
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className='text-black mt-[-30px] text-center text-[20px]'>
                    Blog on <span>{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoryPage