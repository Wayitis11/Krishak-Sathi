import React from 'react';
import Header from './Header';

export default function Aboutus() {
    return (
        
        <div>
            <Header/>
            <div className="mainaboutus">
            <div className="container about mt-5">
                <div className="row">
                    <div className="col-md-6">
                       
                    <img src="./img/tactor.jpg" alt="about Page" style={{height:300}} />
                     
                    </div>
                    <div className="col-md-6">
                        <h5>Parts for agricultural tractors Agrofarm</h5>
                        <p>N. Our next goal is to provide options for buying equipments and many more. The aim here is to provide the users a single place where they can use different features like live weather forecast, learn about modern techniques for improving the cultivation process. We are also planning
                            to add a new feature where the farmers or the users can raise their questions and talk with Agrologist.   
                        </p>
                        </div>
                </div>
            </div><br/>
            <hr/>

            <div className="container ">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className='missionabout'>
                                <h5>Mission</h5>
                                <p>In our offer you can find second hand parts from dismantled tractors, new ones and replacements.
                                     Because we have a well stocked warehouse we can deliver all parts very quickly. Of course they are
                                      carefully checked before dispatch. We do our best to make sure our assortment is reliable. We offer a
                                      n second-hand partse warehparts very quickly. Of course they are carefully checked before dispatch. We do our best to make sure our assortment is reliable. We offer a two-week quarantee on second-hand parts. The orders placed before 2 p.m. are packaged and delivered shortly. </p>
                                </div>
                        </div>

                    <div className="col-md-6 ">
                        <div className='missionabout'>
                        <h5>Vision</h5>
                        <p>To utilize local resources of Nepal in reality and provide a single platform for multiple purposes regarding Agricultural sector and Agro products. Krishak Sathi is committed to raise the standard of living of rural and urban Nepalese by providing them with an opportunity to easily buy fresh vegetables.  It work as a bridge to access between products and potential customers and save their time.
                             All the products seen in the website are ready to dispatch materials so we just need the time delivering the products.</p>
                    </div></div>

                </div>
                
            </div>
            
        </div>
        </div>
    )
}
