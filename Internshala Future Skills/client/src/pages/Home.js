import React, { useState } from 'react'
import ALlcards from '../components/ALlcards.js'


const Home = () => {
    const [search, setSearch]=useState('')
    return (
        <>

        {/* How Can We Help Section */}
            <section className='how-can-we-help' style={{ height: "40vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="container text-center">
                    <h1>How can we help?</h1>
                    <form>
                        <div className="mb-3">
                            <input onChange={(e)=>setSearch(e.target.value)} type="search" className="form-control search-input" />   
                        </div>
                    </form>

                </div>
            </section>






            {/* ALl Cards List */}
            <ALlcards search={search}/>


        </>
    )
}

export default Home