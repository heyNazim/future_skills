import axios from 'axios';
import React, { useState } from 'react';

const Createcards = () => {
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post(`${process.env.REACT_APP_API}/createCard`, { title, description });
            if (result.data.success) {
                alert("Card created successfully!");
            }
        } catch (error) {
            console.error("Error creating card:", error); // Add error handling
        }
    };

    return (
        <>
            <section className='mt-5'>
                <div className="container">
                    <div className="form-card-box">
                        <form onSubmit={handleSubmit}>
                            <h3 className='text-center mb-4'>Create New Card</h3>
                            <div className="form-group">
                                <input 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    type="text" 
                                    className="form-control" 
                                    id="title" 
                                    placeholder="Enter title" 
                                    value={title} 
                                />
                            </div>
                            <div className="form-group mt-4">
                                <textarea 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    className="form-control" 
                                    id="description" 
                                    rows="3" 
                                    placeholder="Enter description" 
                                    value={description} 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Createcards;
