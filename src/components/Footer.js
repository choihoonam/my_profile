import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="inner">
                    <div className="fInfo">
                        <address>서울 금천구 독산동</address>
                        <p className="tel"><strong>PHONE</strong> 010-3448-4838</p>
                        <p className="cpr">Copyright ⓒ2020 Hoois All Right Reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}