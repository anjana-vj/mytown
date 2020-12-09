import React from 'react';
import data from '../../../mytown/mytown_data.json';
class AddBusinessDataForm extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2>Busness Details</h2>
                                <form className="form">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="bname" placeholder="Busness Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="ename" placeholder="Enterprenour Name" required />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="category" id="category">
                                            <option disabled selected>Choose category</option>
                                            {data.clist.map((categories) => {
                                                return (
                                                    <option>{categories.domain}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address_bar1" placeholder="Address Line 1" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address_bar2" placeholder="address Line 2" required />
                                    </div>

                                    <div className="form-group">
                                        <select className="custom-select" name="City" >
                                            <option disabled selected>Choose City</option>
                                            {data.city.map((cities) => {
                                                return (
                                                    <option>{cities.city}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="pin" placeholder="pin" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="cno" placeholder="contact number" required />
                                    </div>
                                    <div className="form-group">

                                        Premium account : <input type="radio" name="accounttype" placeholder="premium account" required />Yes
            <input type="radio" name="accounttype" placeholder="local account" required />No
            </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-success" type="button">ADD</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class AddCategoriesForm extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row">
                            <div className="col-md-6">

                                <h2>All Categories</h2>

                                <table className="table m-2">
                                    <tr>
                                        <th>name</th>
                                        <th className="text-center">actions</th>
                                    </tr>

                                    {
                                        data.clist.map((categories) => {
                                            return (
                                                <>

                                                    <tr>
                                                        <td >{categories.domain}</td>
                                                        <td className="text-center">
                                                            <button className="btn btn-sm btn-primary">Edit</button>
                                                            <button className="btn btn-sm btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </table>

                            </div>
                            <div className="col-md-5">
                                <form className="form m-2">
                                    <h2>Add Categories</h2>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="category name" required />

                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-md btn-primary">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export { AddBusinessDataForm, AddCategoriesForm }