import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaArrowLeft, FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const NewsDetailsCard = ({news}) => {
    console.log("News Details Card: ", news);
    return (
        <div className="card bg-base-100 shadow-sm mt-2 overflow-hidden">
            <div className='flex justify-between items-center bg-gray-200 px-5 py-2'>
                <div className='flex items-center gap-1'>
                    <Image 
                        src={news.author?.img} 
                        alt={news.author?.name} 
                        width={40} 
                        height={40} 
                        className='rounded-full'
                    />
                    <div>
                        <h2 className='font-semibold'>{news.author?.name}</h2>
                        <p className='text-xs'>{news.author?.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <div className="card-body">
                <h2 className='card-title'>{news.title}</h2>
                <figure>
                    <Image 
                        src={news.image_url} 
                        alt={news.title} 
                        width={500}
                        height={300}
                        className='w-full h-auto'
                    />
                </figure>
                <p className=''>{news.details}</p>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center gap-2">
                        <p className="flex items-center gap-2">
                            <IoIosStar className='text-lg text-yellow-600' />
                            {news.rating?.number}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaEye className='text-lg text-yellow-600' />
                            {news.total_view}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/news/category/${news.category_id}`}>
                            <button className='btn btn-secondary'><FaArrowLeft /> See All News in This Category</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;