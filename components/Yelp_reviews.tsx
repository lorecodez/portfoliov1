import React from 'react';

type reviewList = {
    total: number,
    reviews: [{
        id: string,
        url: string,
        text: string,
        rating: number,
        time_created: string,
        user: {
            id: string,
            profile_url: string,
            image_url: string | null,
            name: string,
        }

    }] 
}

export default async function Yelp_reviews() {
    const initYelpData = async (businessId : string): Promise<reviewList> => {
        const options = {
            method: 'GET', 
            headers: {
                accept: 'application/json',
                Authorization: 'bXuRbM40TXVaWf5sFlEfBKnYLBHrMKnEpmZRBzk8bGM9tbnAaoukT1Wwj1MxJuqw8RVoTJjcYVsVdrgSRv9_urcGZGCpuN5kZHgIp04QGHeqRrcg4Am-5RNZqYMvZXYx'
            }};

         const data = await fetch(`https://api.yelp.com/v3/businesses/marugame-monzo-los-angeles-5/reviews?limit=3&sort_by=newest`, options);
        console.log(data);
         return await data.json();
    }

    const reviewList = await initYelpData("") as reviewList;

    if(!reviewList){
        return <div className='mx-auto w-max text-center font-mono text-lg font-extrabold relative h-fit py-2 before:absolute before:inset-0 before:animate-typewriter before:bg-white 
        after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black'>
            Loading Reviews...
        </div>
    }

//   return (
//     <div>{reviewList.reviews.map(review => (
//         <div key={review.id}>{review.text}</div>
//     ))}</div>
//   )
}
