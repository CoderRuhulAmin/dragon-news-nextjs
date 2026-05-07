import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <ul className="flex flex-col gap my-4 space-y-1 text-gray-500 px-4">
            {
                categories.map(category => 
                <li key={category.category_id}>
                    <Link 
                        href={`/news/category/${category.category_id}`} 
                        className={`block hover:bg-slate-500 hover:text-base-100 py-2 px-2 rounded-md
                        ${activeId === category.category_id ? "bg-slate-500 text-base-100" : ""}`}>
                        {category.category_name}
                    </Link>
                </li>)
            }
        </ul>
    );
};

export default LeftSidebar;