import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs/Auxs';
import HeroSlider from '../../components/UIComponents/AntCarousel/AntCarousel';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <Auxs>
                <div className="Home-wrapper">
                    <div className="slider-wrapper">
                        <HeroSlider />
                    </div>
                </div>
            </Auxs>
        )
    }
}
export default Home;