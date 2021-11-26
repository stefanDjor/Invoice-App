const Filter = ({changedFilter, chekedBoxes}) => {   

    function checkboxChanged(e){
        changedFilter({
            name: e.target.name, 
            value: e.target.checked
        })
    }

    function InputCheck(inputId) {
        return (chekedBoxes.find(filter => filter === inputId)) ? true : false
    }


    return (
        <div className="filter">
                        
        <label className="container">
            <input onChange={checkboxChanged} type="checkbox" name="draft" id="draft"  checked={InputCheck("draft")}/>
            <span className="checkmark"></span> Draft
        </label>
        <label className="container">
        <input onChange={checkboxChanged} type="checkbox" name="pending" id="pending" checked={InputCheck("pending")}/>
            <span className="checkmark"></span> Pending
        </label>
        <label className="container">
        <input onChange={checkboxChanged} type="checkbox" name="paid" id="paid" checked={InputCheck("paid")}/>
            <span className="checkmark"></span> Paid
        </label>
        
    </div>
    )
}

export default Filter