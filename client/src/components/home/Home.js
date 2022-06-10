import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import largeLogo from '../../assets/images/ec-new-large.png';
import HomeMovieTrending from '../homeMovieTrending/HomeMovieTrending';
import HomePeopleTrending from '../homePeopleTrending/HomePeopleTrending';
import HomeTvTrending from '../homeTvTrending/HomeTvTrending';
import './Home.scss';


function Home(){
    
    return(
        <div className='home-container'>
            <Container>
                <Row>
                    <Col>
                        <div className='home-logo-container' >
                            <img src={largeLogo} alt='logo' className='large-logo' />
                        </div>
                    </Col>
                </Row>
                <HomeMovieTrending />
                <HomePeopleTrending />
                <HomeTvTrending />
            </Container>
        </div>
    );
};

export default Home;