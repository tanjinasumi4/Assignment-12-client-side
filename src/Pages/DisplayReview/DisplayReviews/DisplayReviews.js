import React, { useEffect, useState } from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';

const DisplayReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = 'https://afternoon-falls-71642.herokuapp.com/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=' text-center'>
            <h1>Some Reviews of our dearest customer</h1>
            <div className="container overflow-hidden">

                <hr />
                <div class="row gy-5">
                    {
                        reviews.map(review => <DisplayReview key={review._id} review={review}></DisplayReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DisplayReviews;