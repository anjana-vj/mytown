import React from 'react';
import { NavLink } from "react-router-dom";

import './../../firebase';
import firebase from 'firebase';
import $ from 'jquery';
import serializeJSON from 'jquery-serializejson';
window.serializeJSON = serializeJSON;
class CategoriesModule extends React.Component {
    constructor() {
        super();
        this.addCategories = this.addCategories.bind(this)
        this.readCategories = this.readCategories.bind(this)
        this.deleteCategories = this.deleteCategories.bind(this)
        this.input_handlerCategories = this.input_handlerCategories.bind(this)
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        this.readCategories()
    }
    addCategories = (e) => {
        e.preventDefault();
        var data = {}
        var database = firebase.database();
        var key = database.ref('categories').push().key;
        data['domain'] = this.state.input_handlerCategoriesValue
        data['key'] = key;
        database.ref('categories/' + key).set(data, (error) => {
            if (error) { alert(error); } else {
                this.readCategories();
                this.setState({
                    input_handlerCategoriesValue: ''
                })
            }
        });
    }
    deleteCategories = (category) => {
        var database = firebase.database();
        var CategoriesRef = database.ref('categories/' + category.key);
        CategoriesRef.remove().then(() => {
            alert('Deleted : ' + category.domain);
        }).catch(err => {
            alert(err);
        });
    }
    readCategories = () => {
        var database = firebase.database();
        var CategoriesRef = database.ref('categories');
        CategoriesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    categories: datas
                })
            } else {
                this.setState({
                    categories: []
                })
            }
        });

    }
    input_handlerCategories = (e) => {
        e.preventDefault();
        this.setState({
            input_handlerCategoriesValue: e.target.value
        })
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
                                    <thead>
                                        <tr>
                                            <th>name</th>
                                            <th className="text-center">actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.categories.map((category) => {
                                                return (
                                                    <>
                                                        <tr key={category.key}>
                                                            <td >{category.domain}</td>
                                                            <td className="text-center">
                                                                <button className="btn btn-sm btn-primary" onClick={() => { alert("Not Available") }}>Edit</button> &nbsp;
                                                            <button className="btn btn-sm btn-danger" onClick={() => {
                                                                    var r = window.confirm("Do you want to delete : " + category.domain);
                                                                    if (r === true) {
                                                                        this.deleteCategories(category);
                                                                    }

                                                                }}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div className="col-md-5">
                                <form className="form m-2" onSubmit={this.addCategories}>
                                    <h2>Add Category</h2>
                                    <div className="form-group">
                                        <input type="text" value={this.state.input_handlerCategoriesValue} onChange={this.input_handlerCategories} className="form-control" placeholder="category name" required />

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

class CitiesModule extends React.Component {
    constructor() {
        super();
        this.addCities = this.addCities.bind(this)
        this.readCities = this.readCities.bind(this)
        this.deleteCities = this.deleteCities.bind(this)
        this.input_handlerCities = this.input_handlerCities.bind(this)
        this.state = {
            cities: []
        }
    }
    componentDidMount() {
        this.readCities()
    }
    addCities = (e) => {
        e.preventDefault();
        var data = {}
        var database = firebase.database();
        var key = database.ref('cities').push().key;
        data['domain'] = this.state.input_handlerCitiesValue
        data['key'] = key;
        database.ref('cities/' + key).set(data, (error) => {
            if (error) { alert(error); } else {
                this.readCities();
                this.setState({
                    input_handlerCitiesValue: ''
                })
            }
        });
    }
    deleteCities = (city) => {
        var database = firebase.database();
        var CitiesRef = database.ref('cities/' + city.key);
        CitiesRef.remove().then(() => {
            alert('Deleted : ' + city.domain);
        }).catch(err => {
            alert(err);
        });
    }
    readCities = () => {
        var database = firebase.database();
        var starCountRef = database.ref('cities');
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    cities: datas
                })
            } else {
                this.setState({
                    cities: []
                })
            }
        });

    }
    input_handlerCities = (e) => {
        e.preventDefault();
        this.setState({
            input_handlerCitiesValue: e.target.value
        })
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row">
                            <div className="col-md-6">

                                <h2>All Cities</h2>

                                <table className="table m-2">
                                    <thead>
                                        <tr>
                                            <th>name</th>
                                            <th className="text-center">actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.cities.map((city) => {
                                                return (
                                                    <>
                                                        <tr key={city.key}>
                                                            <td >{city.domain}</td>
                                                            <td className="text-center">
                                                                <button className="btn btn-sm btn-primary" onClick={() => { alert("Not Available") }}>Edit</button> &nbsp;
                                                            <button className="btn btn-sm btn-danger" onClick={() => {
                                                                    var r = window.confirm("Do you want to delete : " + city.domain);
                                                                    if (r === true) {
                                                                        this.deleteCities(city);
                                                                    }

                                                                }}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div className="col-md-5">
                                <form className="form m-2" onSubmit={this.addCities}>
                                    <h2>Add City</h2>
                                    <div className="form-group">
                                        <input type="text" value={this.state.input_handlerCitiesValue} onChange={this.input_handlerCities} className="form-control" placeholder="city name" required />

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


class AddBusinessDataForm extends React.Component {
    constructor() {
        super();
        this.readCategories = this.readCategories.bind(this)
        this.readCities = this.readCities.bind(this)
        this.state = {
            categories: [],
            cities: []
        }
    }
    componentDidMount() {
        this.readCategories();
        this.readCities();
    }
    readCategories = () => {
        var database = firebase.database();
        var CategoriesRef = database.ref('categories');
        CategoriesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    categories: datas
                })
            } else {
                this.setState({
                    categories: []
                })
            }
        });

    }
    readCities = () => {
        var database = firebase.database();
        var starCountRef = database.ref('cities');
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    cities: datas
                })
            } else {
                this.setState({
                    cities: []
                })
            }
        });

    }
    addNewBusiness = (event) => {
        event.preventDefault();
        var data = $('#AddNewBusinessForm').serializeJSON();
        var database = firebase.database();
        var key = database.ref('cities').push().key;
        data['key'] = key;
        database.ref('business_list/' + key).set(data, (error) => {
            if (error) {
                alert(error);
            }
            else {
                alert("Business Data Added Successfully");
                $('#AddNewBusinessForm').trigger("reset");
            }
        });
    }

    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2>Business Details</h2>
                                <form className="form" id="AddNewBusinessForm" onSubmit={this.addNewBusiness}>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="bname" placeholder="Business Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="ename" placeholder="Entrepreneur Name" required />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="category" id="category" required>
                                            <option disabled selected defaultValue=''>Choose category</option>
                                            {this.state.categories.map((category) => {
                                                return (
                                                    <option key={category.key} value={category.domain}>{category.domain}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address_line1" placeholder="Address Line 1" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address_line2" placeholder="Address Line 2" required />
                                    </div>

                                    <div className="form-group">
                                        <select className="custom-select" name="city" required >
                                            <option disabled selected defaultValue=''>Choose City</option>
                                            {this.state.cities.map((city) => {
                                                return (
                                                    <option key={city.key} value={city.domain}>{city.domain}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="pin" placeholder="PIN Code" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="mobile" placeholder="contact number" required />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-success" type="submit">ADD</button>

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
class AllBusinessList extends React.Component {
    constructor() {
        super()
        this.readBusinessData = this.readBusinessData.bind(this);
        this.deleteBusinessData = this.deleteBusinessData.bind(this);
        this.state = {
            business_list: []
        }
    }
    componentDidMount() {
        this.readBusinessData();
    }
    readBusinessData = () => {
        var database = firebase.database();
        var CategoriesRef = database.ref('business_list');
        CategoriesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    business_list: datas
                })
            } else {
                this.setState({
                    business_list: []
                })
            }
        });
    }
    deleteBusinessData = (business) => {
        var database = firebase.database();
        var CitiesRef = database.ref('business_list/' + business.key);
        CitiesRef.remove().then(() => {
            alert('Deleted : ' + business.bname);
        }).catch(err => {
            alert(err);
        });
    }
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <h2>All Accounts</h2>
                        <table className="table table-bordered bg-white">
                            <thead>
                                <tr>
                                    <th>SI.No</th>
                                    <th>Business Name</th>
                                    <th>Category</th>
                                    <th>Address</th>
                                    <th>city</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.business_list.map((business, index) => {
                                        return (

                                            <tr key={business.key}>
                                                <td>{index + 1}</td>
                                                <td>{business.bname}</td>
                                                <td>{business.category}</td>
                                                <td>
                                                    <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0, margin: 0 }}>
                                                        <li>{business.address_line1}</li>
                                                        <li>{business.address_line2}</li>
                                                    </ul>
                                                </td>
                                                <td>{business.city}</td>
                                                <td>
                                                    <NavLink className="btn btn-sm btn-warning" to={'/admin/business/premium/edit/' + index + 1}><i className="fa fa-edit"></i> Edit</NavLink>
                                            &nbsp; <button onClick={() => {
                                                        var r = window.confirm("Do you want to delete : " + business.bname);
                                                        if (r === true) {
                                                            this.deleteBusinessData(business);
                                                        }
                                                    }} className="btn btn-sm btn-danger"><i className="fa fa-close"></i> Remove</button>
                                                </td>
                                            </tr>
                                        )
                                    })

                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }

}
export { CitiesModule, CategoriesModule, AddBusinessDataForm, AllBusinessList };
