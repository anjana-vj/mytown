import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../../../mytown/mytown_data.json';
class AllBusiness extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <h2>All Accounts</h2>
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
                                            &nbsp; <button className="btn btn-sm btn-danger"><i className="fa fa-close"></i> Remove</button>
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
                                <h2>Business Details</h2>
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
                                                            <button className="btn btn-sm btn-primary">Edit</button> &nbsp;
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
class CustomerRegistration extends React.Component {
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
                                <h2>Public User Registration</h2>
                                <form className="form">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="uname" placeholder="User Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="UAddress" placeholder="Address" required />
                                    </div>
                                    <div className="form-group">

                                        Gender: <input type="radio" name="gender" placeholder="gender" required />Male
                                      <input type="radio" name="gender" placeholder="gender" required />Female
                                      </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="cno" placeholder="Contact No" required />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-success" type="button">Save</button>

                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-success" type="button">Edit</button>

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
class UserBookings extends React.Component {
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
                                <h2>My Bookings</h2>
                                <table className="table m-n">
                                    <tr>
                                        <th>Business Name</th>
                                        <th>Category</th>
                                        <th>Address</th>
                                        <th>Booking Time</th>
                                        <th>Booking Status</th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
class MyReviews extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>My Reviews</h2>
                            <table className="table">
                                <tr>
                                    <th>Business Name</th>
                                    <th>Category</th>
                                    <th>City</th>
                                    <th>Review</th>
                                    <th>Ratings</th>
                                    <th>Actions</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class BRegistration extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>Registration</h2>
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
                                    <input type="text" className="form-control" name="bankacno" placeholder="Bank Account no" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="bankaddress" placeholder="Bank Address" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-success" type="button">Register</button>

                                </div>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-success" type="button">Premium Membership</button>

                                </div>


                            </form>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
class PremiumMembershipForm extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>Premium Membership Registration</h2>
                            <form className="form">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="membershipid" placeholder="Membership ID" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="duration" placeholder="Membership Duration" required />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name="duration" id="duration">
                                        <option>Choose category</option>
                                        <option>6 Months</option>
                                        <option>1 Year</option>         
                                    </select>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-success" type="button">Proceed </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
class ViewMyAccountForm extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>My Account</h2>
                            <form className="form">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="bname" placeholder="Busness Name" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="ename" placeholder="Enterprenour Name" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="category" placeholder="Category" required />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" name="address_bar1" placeholder="Address Line 1" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="address_bar2" placeholder="address Line 2" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="city" placeholder="City" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="pin" placeholder="pin" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="cno" placeholder="contact number" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="bankacno" placeholder="Bank Account no" required />
                                </div>
                            </form>
                            <div className="form-group">
                                <input type="text" className="form-control" name="bankaddress" placeholder="Bank Address" required />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-lg btn-success" type="button">Edit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
class EditAccountDetails extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>Edit Account Details</h2>
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
                                    <input type="text" className="form-control" name="bankacno" placeholder="Bank Account no" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="bankaddress" placeholder="Bank Address" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-success" type="button">Save</button>

                                </div>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-success" type="button">Back</button>

                                </div>


                            </form>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
class ManageBookings extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>Manage Bookings</h2>
                            <table className="table table-bordered bg-white">
                                <tr>
                                    <th>SI.No</th>
                                    <th>User Name</th>
                                    <th>Category</th>
                                    <th>Address</th>
                                    <th>Contact No</th>
                                    <th>Booking Time</th>
                                    <th>Booking Date</th>
                                    <th>Actions</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class CustomerReview extends React.Component{
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <h2>Reviews</h2>
                        <table className="table">
                            <tr>
                                <th>Customer Id</th>
                                <th>Review</th>
                                <th>Ratings</th>
                                <th>Actions</th>
                            </tr>
                            {
                                data.reviews.map((review) => {
                                    return (

                                        <tr>
                                            <td>{review.cid}</td>
                                            <td>{review.review}</td>
                                            <td>{review.rating}</td>
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

export { AddBusinessDataForm, AddCategoriesForm, AllBusiness }
