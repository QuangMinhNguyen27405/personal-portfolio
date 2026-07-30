import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className="home__container container">
            <div className="term home__term">
                <div className="term__bar">
                    <div className="term__dots"><span></span><span></span><span></span></div>
                    <span className="term__title">minh@portfolio: ~/quang-minh-nguyen — zsh</span>
                </div>
                <div className="term__body home__content">
                    <Data />

                    <div className="home__aside">
                        <div className="home__img"></div>
                        <Social />
                    </div>
                </div>
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home
