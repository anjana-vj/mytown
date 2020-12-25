import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import data from './../../../mytown/mytown_data.json';
class PremiumAccounts extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <h2>Premium Accounts</h2>
                        <table className="table table-bordered bg-white">
                            <tr>
                                <th>SI.No</th>
                                <th>Business Name</th>
                                <th>Category</th>
                                <th>Address</th>
                                <th>city</th>
                                <th>Actions</th>
                            </tr>
                            {
                                data.blist.map((business, index) => {
                                    return (
                                        <>
                                            {business.premium === 1 ? <>

                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{business.name}</td>
                                                    <td>{business.category}</td>
                                                    <td>{business.add}</td>
                                                    <td>{business.city}</td>
                                                    <td>
                                                        <NavLink className="btn btn-sm btn-warning" to={'/admin/business/premium/edit/' + index + 1}><i className="fa fa-edit"></i> Edit</NavLink>
                                            &nbsp; <button className="btn btn-sm btn-danger"><i className="fa fa-close"></i> Remove</button>
                                                    </td>
                                                </tr>
                                            </> : null}

                                        </>)
                                })

                            }

                        </table>
                    </div>
                </section>
            </div>
        )
    }

}
class EditPremiumAccount extends React.Component {
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row">
                            <div className="col">

                                <form className="form">
                                    <h1>Edit Premium Accounts - {this.props.match.params.id} </h1>

                                    <div className="form-group">
                                        <input type="text" className="form-control" name="bname" placeholder="Business Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="ename" placeholder="Enterprenour Name" required />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="category" required>
                                            <option disabled selected>choose a category</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="city" required>
                                            <option disabled selected>choose a city</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="bankacno" placeholder="Bank Account.No" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="pin" placeholder="pin.no" required />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="status" required>
                                            <option>active</option>
                                            <option>expired</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-md btn-success">Save</button>
                                        &nbsp;
                                        <a onClick={(e) => { e.preventDefault(); this.props.history.goBack(); }} className="btn btn-md btn-danger text-white">Cancel</a>
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
export { PremiumAccounts, EditPremiumAccount }