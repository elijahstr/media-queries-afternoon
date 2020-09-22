import React, { Component } from 'react'
import "../App.css"

export default class Header extends Component {
    render() {
        return (
            <div>
                <section className="background">
                    <header>
                        <section className="startBoot">Start Bootstrap</section>
                        <section className="menu">
                        <button className="menu-button">Menu</button>
                        </section>
                            <nav>
                                <a>SERVICES </a>
                                <a>PORTFOLIO </a>
                                <a>ABOUT </a>
                                <a>TEAM </a>
                                <a>CONTACT</a>
                            </nav>
                    </header>

                        <section className="main-content">
                            <p id="welcome">Welcome To Our Studio!</p>
                            <p id="nice">IT'S NICE TO MEET YOU</p>
                            <section className="button-class">
                                <button id="tell">TELL ME MORE</button>
                            </section>
                        </section>
                    </section>

                    

                
            </div>
        )
    }
}
