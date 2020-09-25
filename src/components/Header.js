import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="inner">
                    <h1>init( );</h1>
                    <ul>
                        <li><span className="token var">const</span> <span className="token keyword">name</span> = <span className="token string">'choi hoo nam'</span></li>
                        <li><span className="token var">const</span> <span className="token keyword">role</span> = <span className="token string">'publishing'</span></li>
                        <li>
                            <span className="token var">const</span> <span className="token keyword">technologies</span> = [
                            <span className="token string"> 'HTML5' </span>,
                            <span className="token string"> 'CSS3' </span>,
                            <span className="token string"> 'JavaScript' </span>,
                            <span className="token string"> 'jQuery' </span>,
                            <span className="token string"> 'Bootstrap' </span>,
                            <span className="token string"> 'Responsive Web' </span>,
                            <span className="token string"> 'Cross Browsing' </span>,
                            <span className="token string"> 'Web Accessibility' </span>]
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}