import React, { Component } from "react";
import $ from 'jquery';
window.$ = window.jQuery = require('jquery');

export default class Header extends Component {
    componentDidMount() {
        $('.modeInput').on('change', function() {	
            if($(this).is(':checked')){
                $('body').addClass('white');
                console.log(1);
            }else{
                $('body').removeClass('white');
                console.log(2);
            }
        })
    }
    render() {
        return (
            <div className="header">
                <div className="inner">
                    <h1>init( );</h1>
                    <ul>
                        <li><span className="token var">const</span> <span className="token keyword">name</span> = <span className="token string">'Choi, hoonam'</span></li>
                        <li><span className="token var">const</span> <span className="token keyword">role</span> = <span className="token string">'Publishing'</span></li>
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
                    <label className="mode">
                        <input className="modeInput" type="checkbox"/> white mode
                    </label>
                </div>
            </div>
        );
    }
}