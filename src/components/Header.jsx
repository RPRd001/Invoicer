import Dialog from './Dialog';


const Header = () => {
	

	return (
		<header className="flex flex-row items-center justify-between">
			<div>
				<h1 className="text-3xl">Invoices</h1>
				<span className="text-sm">There are 7 invoices</span>
			</div>
			<form className="flex flex-row items-center gap-3" action="">
				<div className="flex flex-col">
					<label htmlFor="filter">Filter by Status</label>
					<select name="filter" id="filter" className="text-black text-center">
						<option value="">Paid</option>
						<option value="">Pending</option>
						<option value="">Completed</option>
					</select>
				</div>

				<button type='button'>New</button>
				<Dialog />
			</form>
		</header>
	);
};

export default Header;
