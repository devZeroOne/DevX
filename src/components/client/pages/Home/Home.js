import React from 'react';
import Layout from '../../../common/Layout/Layout';
import Category from '../../category/Category';
import HeroSection from '../../HeroSection/HeroSection';
import Posts from '../../posts/Posts';
import './Home.css'

const Home = () => {
    return (
        <>

            <Layout>
                <HeroSection />



                <div className="homeMainBody">

                    <div className="left">
                        <Posts />
                    </div>
                    <div className="right">
                        <Category />
                    </div>


                </div>



            </Layout>






        </>
    );
};

export default Home;