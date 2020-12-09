import React from 'react';
import { NavLink } from 'react-router-dom';
import data from './../../../mytown/mytown_data.json';
class PremiumAccounts extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
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

                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{business.name}</td>
                                            <td>{business.category}</td>
                                            <td>{business.add}</td>
                                            <td>{business.city}</td>
                                            <td>
                                                <NavLink className="btn btn-sm btn-warning" to={'/admin/business/premium/edit/' + index + 1}><i className="fa fa-edit"></i> Edit</NavLink>
                                            &nbsp; <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                    )
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
    constructor() {
        super()
    }
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row">
                            <div className="col">

                                <form className="form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="bname" placeholder="Business Name" required />
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
export { PremiumAccounts };