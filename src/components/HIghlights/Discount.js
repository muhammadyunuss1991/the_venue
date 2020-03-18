import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
    
    state = {
        discountStart: 0,
        discountEnd: 30
    }
    
    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.percentage()
        }, 30)
    }

    render() {
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>

                    <Fade
                        onReveal={() => this.percentage()}
                    >
                        <div className='discount_porcentage'>
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    
                    <Slide right> 
                        <div className='discount_description'>
                            <h3>Purchase tickets before August 27th</h3>
                            <p>Just kidding, there's no such thing as a discount to a Taylor Swift Concert. Literally the most greatest superstar performer of our generation doesn't need to have a discount to attract concert-goers. Also, the date is after the concert.</p>

                            <div>
                                <MyButton
                                    text='Purchase Tickets'
                                    bck="#ffa800"
                                    color="#ffffff"
                                    link='https://www.axs.com/uk/events/384492/taylor-swift-tickets?skin=bst'
                                />
                            </div>
                        </div>
                    </Slide>
                    
                </div>
            </div>
        );
    }
}


export default Discount;