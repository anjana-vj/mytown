import React from 'react';
import './base.scss';
import data from './mytown_data.json';
function MyAppHome() {
    return (
        <>
            <div className="my-home-nav">
                <div className="logo"><div className="logo-text"><i class="fa fa-home"></i>My Town</div></div>
            </div>
            <div className="content-area">
                <div className="search-box">
                    <form>
                        <div className="block-a">
                            <select>
                                <option>Choose City</option>
                                {data.city.map((city_list) => {
                                    return (
                                        <option>{city_list.city}</option>
                                    )
                                })}
                            </select>
                            <select>
                                <option>Category All</option>
                                {data.clist.map((c_list) => {
                                    return (
                                        <option>{c_list.domain}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="block-b">
                            <input type="text" placeholder="Type Something" />
                            <button>Search</button>
                        </div>
                    </form>
                </div>
                <div className="result">
                    <div className="list">
                        <ul>
                            {data.blist.map((lister) => {
                                return (
                                    <li>
                                        <h3>{lister.name}</h3>
                                        <p>{lister.add}</p>
                                        <a href={"tel:" + lister.mob}>Call</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyAppHome;