import React from "react";
import './Footer.css'
import logo_big from '../Assets/logo_big.png'
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={logo_big} alt=""/>
                <h1>SHOPPER</h1>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt=""/>
                </div>
            </div>
                <div className="footer-copyright">
                    <hr/>
                    <p>Copyright @2023 - All Rights Reserved</p>
                </div>

            
        </div>
    )
}
export default Footer;