// Adding Local State to a Class
import React from 'react';

class CookieShop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cookie : 0
        }

        // binding the buyCookie function with the class
        this.buyCookie = this.buyCookie.bind(this);
    }

    // function to add cookies to your cart
    buyCookie() {
        // using setState() to increament the value of cookies
        this.setState({
            cookie : this.state.cookie +1
        })
    }

    // returning the react element with help of render() method

    // button to increase the number of cookies
    render() {
        return(
            <div>
                <p1>Current Number of cookies in your cart : { this.state.cookie }</p1>

                <br /> 
                <button class='button' onClick={ this.buyCookie }>
                  Add more Cookies to your cart!!!
                </button>
            </div>
        )
    }

}

export default CookieShop;