import { useState } from 'react';

const Addproduct = () => {

    let [state, setState] = useState({
        category: "", name: "", image: "", price: "", o_price: "", dis: ""
    });

    let ChangeData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name,value)

        setState({
            ...state, [name]: value
        })
    }

    let submitData = (e) => {
        e.preventDefault()

        fetch("http://localhost:3005/product", {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => { console.log("data inserted"); })
            .catch(err => { console.log("data not found"); })
    }

    return (
        <div>
            <div className="card" style={{ margin: "40px" }}>
                <form className="form-horizontal" onSubmit={(e) => submitData(e)}>
                    <div className="card-body">
                        <h4 className="card-title">Product insert</h4>
                        <div className="form-group row">
                            <label className="col-sm-3 text-end control-label col-form-label">Enter Category</label>
                            <div className="col-sm-3">
                                <select className="form-control" name='category' placeholder='Enter Category' onChange={(e) => ChangeData(e)} >
                                    <option value="">--Enter Category--</option>
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 text-end control-label col-form-label">Enter Name</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" name='name' placeholder="Enter Name Here" onChange={(e) => ChangeData(e)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 text-end control-label col-form-label">Select Image</label>
                            <div className='col-sm-3'>
                                <input type="text" className="form-control" name='image' placeholder='Image URL' onChange={(e) => ChangeData(e)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 text-end control-label col-form-label">Price</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" name='price' onChange={(e) => ChangeData(e)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 text-end control-label col-form-label">Old Price</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" name='o_price' onChange={(e) => ChangeData(e)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 text-end control-label col-form-label">Discription</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" name='dis' onChange={(e) => ChangeData(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="border-top">
                        <div className="card-body">
                            <button type="submit" value="submit" name='submit' className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addproduct;
