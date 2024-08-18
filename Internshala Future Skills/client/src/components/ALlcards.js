import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllCards = ({ search }) => {
    const [allCards, setAllCards] = useState([]); // Initialize with an empty array

    useEffect(() => {
        fetchAllCards();
    }, []);

    const fetchAllCards = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API}/allCards`);
            if (result.data.success) {
                setAllCards(result.data.cards);
            }
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    };

    // Filter cards based on search input
    const filteredCards = allCards.filter(card =>
        card.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <section className='mt-5'>
                <div className="container">
                    <div className="row">
                        {filteredCards.length > 0 ? (
                            filteredCards.map((item, index) => (
                                <div key={index} className="col-md-6"> {/* Key prop moved here */}
                                    <Link className='text-decoration-none text-black' to={`card-detail/${item._id}`}>
                                        <div className="card-box">
                                            <h6>{item.title}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No cards match your search.</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllCards;
