import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    
    state = {
        prices: [175, 325, 399],
        positions: ['Gold Circle', 'Diamond VIP', 'Ultimate Bar'],
        desc: [
            'Watch Great Oak stage performances from the exclusive gold circle standing viewing area, which allows you to leave and return from the Gold Circle area into general admission as you wish, Be the first to explore American Express presents BST Hyde Park with entry to the event up to one hour early',
            'The VIP Diamond View is a dedicated premium standing viewing area in front of the stage with unrivalled views of all the Great Oak Stage performances, allowing you to leave and return between the VIP Diamond View into the American Express Summer Garden and general admission area as you wish',
            'Access to the Exclusive American Express Summer Garden Reserved Areas (an exclusive area offering VIP bars, premium food outlets, additional comfortable seating, separate restroom facilities and cloakroom), Enjoy a complimentary choice of Premium Food Offerings – American Express Summer Garden (Voucher Activated)'
        ],
        linkto: ['https://www.axs.com/uk/events/384492/taylor-swift-tickets/promos/261114?skin=bst', 'https://www.axs.com/uk/events/384492/taylor-swift-tickets/promos/261116?skin=bst', 'https://www.google.com/'],
        delay: [500, 0, 500]
    }

    showBoxes = () => {
        return (
            this.state.prices.map((box, i) => (
                <Zoom delay={this.state.delay[i]} key={i}>
                    <div className='pricing_item'>
                        <div className='pricing_inner_wrapper'>
                            <div className='pricing_title'>
                                <span>£{this.state.prices[i]}</span>
                                <span>{this.state.positions[i]}</span>
                            </div>
                            <div className='pricing_description'>
                                {this.state.desc[i]}
                            </div>
                            <div className='pricing_buttons'>
                                <MyButton
                                    text='Purchase'
                                    bck='#ffa800'
                                    color='#ffffff'
                                    link={this.state.linkto[i]}
                                />
                            </div>
                        </div>
                    </div>
                </Zoom>
            ))
        )
    }
    
    render() {
        return (
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>

                    <div className='pricing_wrapper'>
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;