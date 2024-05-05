const Header = () => {

    // Need to add a pop up form for adding the invoice
    // then handle the data and add it to the DB

    const addInvoice = () => {
        alert('New Invoice Added')
    }

    const handleNewButton = () => {
        // call addInvoice() function
        addInvoice() 
    }


	return (
		<header className="flex flex-row items-center justify-between">
			<div>
				<h1 className="text-3xl">Invoices</h1>
				<span className="text-sm">There are 7 invoices</span>
			</div>
			<div className="flex flex-row items-center gap-3">
				<form className="flex flex-col" action="">
					<label htmlFor="filter">Filter by Status</label>
					<select name="filter" id="filter" className="text-black text-center">
						<option value="">Paid</option>
						<option value="">Pending</option>
						<option value="">Completed</option>
					</select>
				</form>

				<button type="button" onClick={handleNewButton}  className="bg-[#7c5df9] px-4 py-2 rounded-full">New +</button>
			</div>
		</header>
	);
};

export default Header;
