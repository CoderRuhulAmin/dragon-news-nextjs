import { getNewsDetailsById } from '@/lib/data';
import React from 'react';
import NewsDetailsCard from '../../components/NewsDetailsCard';
import RightSidebar from '../../components/RightSidebar';


export const generateMetadata = async ({ params }) => {
	const { id } = await params;
	console.log("Metadata params id: ", id);
	const news = await getNewsDetailsById(id);

	return {
		title: news.title,
		description: news.details,
	}
}



const NewsDetailsPage = async ({ params }) => {
	const { id } = await params;
	console.log('News ID: ', id);

	const news = await getNewsDetailsById(id);
	console.log('News Details: ', news);

	return (
		<main className='bg-base-200'>
			<section className="py-12">
				<div className="container mx-auto bg-base-100">
					<div className="grid grid-cols-12 gap-4 ">

						<div className="col-span-2">
						</div>

						<div className="col-span-5">
							<div className="bg-red-200 px-4 py-2 font-medium">
								<h3>Dragon News Details</h3>
							</div>
							<div className="space-y-5">
								{
									<NewsDetailsCard news={news} />
								}
							</div>
						</div>
						<div className="col-span-3 shadow-sm">
							<div className="bg-red-200 px-4 py-2 font-medium">
								<h3>Login With</h3>
							</div>
							<RightSidebar />
						</div>

						<div className="col-span-2">
						</div>

					</div>
				</div>
			</section>
			<section className="bg-base-100 py-12">
				<div className="grid grid-cols-4 gap-4">
					<div className="col-span-1 bg-green-200 px-2 py-1 font-medium">
						<h3>All Category</h3>
					</div>
					<div className="col-span-2 bg-purple-200 px-2 py-1 font-medium">
						<h3>Dragon News Home</h3>
					</div>
					<div className="col-span-1 bg-yellow-200 px-2 py-1 font-medium">
						<h3>Login With</h3>
					</div>
				</div>
			</section>
		</main>
	);
};

export default NewsDetailsPage;