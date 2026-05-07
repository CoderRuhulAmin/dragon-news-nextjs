import React from 'react';
import Marquee from 'react-fast-marquee';

const newsData = [
    { id: 1, title: "Global Markets See Sudden Rise Amid Tech Boom" },
    { id: 2, title: "New AI Model Breaks Performance Records" },
    { id: 3, title: "Climate Change: Experts Warn of Faster Ice Melt" },
    { id: 4, title: "Local Startup Raises Million-Dollar Investment" },
    { id: 5, title: "Sports Update: Major League Final Ends in Thriller" },
    { id: 6, title: "Government Announces New Digital Policy" },
    { id: 7, title: "Breakthrough in Renewable Energy Technology" },
    { id: 8, title: "Education System to Introduce AI-Based Learning Tools" },
    { id: 9, title: "Health Experts Share Tips for Better Mental Wellbeing" },
    { id: 10, title: "Space Mission Successfully Lands on Mars Surface" }
];

const BreakingNews = () => {
    return (
        <div className='bg-gray-200'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center gap-4 py-2 px-4'>

                <button className='btn bg-red-500 text-base-100'>Breaking News: </button>
                <Marquee pauseOnHover={true} speed={100}>
                    <div className='space-x-10'>

                        {
                            newsData.map(news => <span key={news.id}>{news.title}</span>)
                        }
                    </div>
                </Marquee>
            </div>
        </div>
        </div>
    );
};

export default BreakingNews;