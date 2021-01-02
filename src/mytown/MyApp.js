import React from 'react';
import './base.scss';
import './../firebase';
import firebase from 'firebase';
import data from './mytown_data.json';
import { NavLink } from 'react-router-dom'
function MyAppHome() {
    return (
        <>
            <div className="my-home-nav">
                <div className="logo"><div className="logo-text"><i className="fa fa-home"></i>My Town</div></div>
                <div>Are you a Business ? <NavLink to='/user/'>Login</NavLink> </div>
            </div>
            <SearchEngine />
        </>
    )
}
class SearchEngine extends React.Component {
    constructor() {
        super();
        this.state = {
            search_result: [],
            search_filter: '',
            no_result: false,
            search_keyword: '',
            categories: [],
            cities: []
        };
        this.oncitychange = this.oncitychange.bind(this);
        this.oncategorychange = this.oncategorychange.bind(this);
        this.noresultchange = this.noresultchange.bind(this);
    }
    componentDidMount() {
        this.readCities();
        this.readCategories();
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
    oncitychange = (e) => {
        const event = e.target.value;
        var database = firebase.database();
        var CategoriesRef = database.ref('business_list');
        CategoriesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                var list = datas.filter(city =>
                    city.city === event
                );
                this.setState({
                    search_result: list
                })
                try {
                    document.getElementById('cat_sel').value = '';
                } catch (e) { console.log(e) }
                var es = [];
                var as = [];
                as['value'] = "";
                es['target'] = as;
                this.oncategorychange(es);

            }
        });

    }
    oncategorychange = (e) => {
        var list = e.target.value;
        this.setState({
            search_filter: list
        })

    }
    noresultchange = (u) => {
        this.setState({ no_result: u });
    }
    searchSpace = (event) => {
        let keyword = event.target.value;
        if (keyword === '')
            this.setState({ search_keyword: '' });
        else
            this.setState({ search_keyword: keyword });
    }
    render() {
        const productsu = this.state.search_result.filter((category) => {
            if (this.state.search_filter !== '') {
                return category.category === this.state.search_filter
            }
            else if (category.bname.toLowerCase().includes(this.state.search_keyword.toLowerCase()) || category.add.toLowerCase().includes(this.state.search_keyword.toLowerCase())) {

                return category;
            }
            else {
                return null
            }
        });
        const products = productsu.filter((category) => {
            if (category.bname.toLowerCase().includes(this.state.search_keyword.toLowerCase()) || category.address_line1.toLowerCase().includes(this.state.search_keyword.toLowerCase())) {
                return category;
            }
            else {
                return true
            }
        }
        ).map((lister) => {
            return (
                <div className="result-block">
                    <div className="section-a">
                        <div className="title-block">
                            <h3>{lister.bname}</h3>
                            <p>{lister.address_line1}</p>
                            <p>{lister.address_line2}</p>
                        </div>
                        <div className="link-block">
                            <a href={"tel:" + lister.mobile} title="Hellooo" aria-label="phonelink"><i className="fa fa-phone fa-2x" aria-hidden="true"></i>.</a>
                            <a href="#a" title="maplink" aria-label="map-link"><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>.</a>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="content-area">
                <div className="search-box">
                    <form>
                        <div className="block-a">
                            <select onChange={this.oncitychange}>
                                <option>Choose City</option>
                                {this.state.cities.map((city) => {
                                    return (
                                        <option key={city.key}>{city.domain}</option>
                                    )
                                })}
                            </select>
                            <select id="cat_sel" onChange={this.oncategorychange}>
                                <option value="">Category All</option>
                                {this.state.categories.map((category) => {
                                    return (
                                        <option key={category.key}>{category.domain}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="block-b">
                            <input type="text" placeholder="Type Something" onKeyUp={this.searchSpace} />
                            <button>Search</button>
                        </div>
                    </form>
                </div>
                <div className="result">
                    <div className="list">
                        {this.state.search_result.length === 0 && this.state.search_filter === '' ? <>
                            <h2>Choose A City</h2   >
                        </> :
                            <>{products}</>}
                        {this.state.no_result === true ? <><h1>Result Not Found</h1></> : null}
                    </div>
                </div>
            </div>
        )
    }
}
export default MyAppHome;