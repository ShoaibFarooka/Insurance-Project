import React, { useState, useEffect } from 'react';
import claimService from '../Services/claimService';
import policyService from '../Services/policyService';
import { message } from "antd";
import Navbar from '../Components/NavBar';
import Policies from '../Components/Policies';
import Claims from '../Components/Claims';
import CreateClaim from '../Components/CreateClaim';
import bg from '../Assets/bg.png';

const Home = ({ setIsAuthenticated }) => {
    const [claims, setClaims] = useState(null);
    const [policies, setPolicies] = useState(null);
    const [updateData, setUpdateData] = useState(false);
    const [activeComponent, setActiveComponent] = useState(1);
    const fetchClaims = async () => {
        try {
            const response = await claimService.getUserClaims();
            setClaims(response);
        } catch (error) {
            message.error(error.response.data);
        }
    };
    const fetchPolicies = async () => {
        try {
            const response = await policyService.getAllPolicies();
            setPolicies(response);
        } catch (error) {
            message.error(error.response.data);
        }
    };

    useEffect(() => {
        fetchPolicies();
        fetchClaims();
    }, [activeComponent]);

    useEffect(() => {
        if (updateData) {
            fetchClaims();
            setUpdateData(false);
        }
    }, [updateData]);

    return (
        <div className="Home" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', overflow: 'hidden', minHeight: '100vh' }}>
            <Navbar setIsAuthenticated={setIsAuthenticated} setActiveComponent={setActiveComponent} />
            {activeComponent === 1 ?
                <Policies policies={policies} />
                : activeComponent === 2 ?
                    <Claims claims={claims} policies={policies} setUpdateData={setUpdateData}/>
                    :
                    <CreateClaim policies={policies} setActiveComponent={setActiveComponent}/>
            }
        </div>
    );
};

export default Home;