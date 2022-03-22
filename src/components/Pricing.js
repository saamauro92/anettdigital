import React from 'react'



import { FiTrendingUp } from "react-icons/fi";

import { VscTasklist } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib'

import { VscOrganization } from 'react-icons/vsc';

import './Pricing.css';

const Pricing = () => {
    return (

        <IconContext.Provider value={{ color: "#fff", size: 64 }}>
            <div>
                <div className="pricing__section">

                    <div className="pricing__wrapper">

                        <h1 className="pricing__heading">When is it better to contact us?
                        </h1>
                        <div className="pricing__container">
                            <div
                                className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <VscTasklist />
                                    </div>
                                    <h4>Do you want to improve your work experience?</h4>

                                </div>
                            </div>

                            <div
                                className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <VscOrganization />
                                    </div>
                                    <h4>Is it time for your team to become professional?</h4>

                                </div>

                            </div>
                            <div
                                className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FiTrendingUp />
                                    </div>
                                    <h4>Is the progress of your company still unclear?</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>

    )
}

export default Pricing
