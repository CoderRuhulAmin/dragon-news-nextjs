import LeftSidebar from "@/app/(main)/components/LeftSidebar";
import NewsCard from "@/app/(main)/components/NewsCard";
import RightSidebar from "@/app/(main)/components/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

export const metadata = {
	title: "Dragon News - News by Category Id",
	description: "Best news portal in Bangladesh",
};

const NewsByCategoryPage = async ({params}) => {
    
    const {id} = await params;
    console.log("params id: ", id);
    
	const categories = await getCategories();
	console.log("Categories: ", categories);

	const news = await getNewsByCategoryId(id);
	console.log('News: ', news);


    return (
        <main className='bg-base-200'>
			<section className="py-12">
				<div className="container mx-auto bg-base-100">
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-3 shadow-sm">
							<div className="bg-red-200 px-4 py-2 font-medium">
								<h3>All Categories</h3>
							</div>
							<LeftSidebar categories={categories} activeId={id}/>
						</div>
						<div className="col-span-6">
							<div className="bg-red-200 px-4 py-2 font-medium">
								<h3>Dragon News by Category ({news.length}) </h3>
							</div>
							<div className="space-y-5">
								{
									news.length > 0 ? news.map(n => {
										return (
											<NewsCard key={n._id} news={n} />
										)
									}) : <h3 className="text-3xl font-semibold text-red-400">No news found!</h3>
								}
							</div>
						</div>
						<div className="col-span-3 shadow-sm">
							<div className="bg-red-200 px-4 py-2 font-medium">
								<h3>Login With</h3>
							</div>
							<RightSidebar />
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

export default NewsByCategoryPage;