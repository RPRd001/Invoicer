

const Dialog = () => {

  return (
    <dialog>
      <form action="">
        <h2>Create a New Invoice</h2>
        
        <label htmlFor="client-name">Client/Company Name:</label>
        <input type="text" />

        <label htmlFor="job-title">Job Title</label>
        <input type="text" />

        <label htmlFor="job-description">Description</label>
        <input type="text" />

        <label htmlFor="item-price">Item Price</label>
        <input type="number" />

        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </form>
    </dialog>
  )
}

export default Dialog