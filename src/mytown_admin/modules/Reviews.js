import React from 'react';
import data from './../../mytown/mytown_data.json'
class Reviews extends React.Component {
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <h2>Reviews</h2>
                        <table className="table">
                            <tr>
                                <th>Customer Id</th>
                                <th>Business Name</th>
                                <th>Category</th>
                                <th>City</th>
                                <th>Review</th>
                                <th>Ratings</th>
                                <th>Actions</th>
                            </tr>
                            {
                                data.reviews.map((review) => {
                                    return (

                                        <tr>
                                            <td>{review.cid}</td>
                                            <td>{review.bname}</td>
                                            <td>{review.category}</td>
                                            <td>{review.city}</td>
                                            <td>{review.review}</td>
                                            <td>{review.rating}</td>
                                            <td>
                                                {review.publish===0?<>
                                                    <button type="button" className="btn btn-sm btn-success"><i className="fa fa-eye-slash" />Publish</button>
                                                </>:<>
                                                <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-eye-slash" />unpublish</button>
                                                </>}
                                                
                                               
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
export { Reviews }