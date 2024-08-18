import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Carddetail = () => {
    const { id } = useParams()
    const [card, setCard] = useState([])



    useEffect(()=>{
        fetchcarddata()
    },[])

    const fetchcarddata = async()=>{
        try {
            const result = await axios.get(`${process.env.REACT_APP_API}/${id}`)
            if(result.data.success){
                setCard(result.data.card)
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(card)
  return (
    <>
    <section className='mt-5'>
        <div className="container">
        <div className="row">
                        {card.map((item, index) => (
                            <div key={index} className="col-md-6"> {/* Key prop moved here */}
                                <div className="card-box">
                                    <h6>Title: {item.title}</h6>
                                    <p>Description: {item.description}</p>
                                    <p>createdAt: {item.createdAt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
        </div>
    </section>
    </>
  )
}

export default Carddetail