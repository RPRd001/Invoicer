import Header from "./Header";

const Dashboard = () => {
	return (
		<section className="w-full bg-[#141625]">
			<div className="flex flex-col p-10 max-w-screen-md mx-auto h-full text-white">
				<Header />

				<div className="flex flex-col gap-2 my-10">
					<div className="flex flex-row items-center gap-4 bg-[#1f213a] px-3 py-5 rounded-md">
						<h2>#RT3080</h2>
						<span>Due 19 Aug 2023</span>
						<span>John Smith</span>
						<span>
							<strong>$240.00</strong>
						</span>
						<span className="px-2 py-1 bg-[#338f7e57]  text-[#48d0a6]">Paid</span>
						<button>l</button>
					</div>
					<div className="flex flex-row items-center gap-4 bg-[#1f213a] px-3 py-5 rounded-md">
						<h2>#RT3080</h2>
						<span>Due 19 Aug 2023</span>
						<span>John Smith</span>
						<span>
							<strong>$240.00</strong>
						</span>
						<span className="px-2 py-1 bg-[#ee8f093f]  text-[#ee8f09]">Pending</span>
						<button>l</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;