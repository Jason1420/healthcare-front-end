import React from 'react';
import './Footer.scss';
import logo from '../../assets/new-logo-dark.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <div className="footer-container">

            <div className="footer-left">
                <div className="title">
                    Healthcare App
                </div>
                <div className="introduce">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, molestiae!
                </div>
                <div className="qr-code">
                    <Image src={logo} alt="" className='' />
                </div>
                <div className="hotline">
                    <span>Hotline: </span>
                    <h5>1800 2040</h5>

                </div>
                <div className="social-network">

                </div>
            </div>

            <div className="footer-right">
                <div className="list">
                    <div className="title-list">
                        Danh mục
                    </div>
                    <div className="list-item">
                        <a href="/category/shop-gifts" >Lorem ipsum</a>
                        <a href="/category/beauty-box" >Lorem, ipsum.</a>
                        <a href="/category/skin-care" >Lorem, ipsum.</a>
                        <a href="/category/makeup" >Lorem, ipsum.</a>
                        <a href="/category/supplement" >Lorem, ipsum dolor.</a>
                        <a href="/category/personal-care" >Lorem, ipsum.</a>
                        <a href="/category/shop-by-ingredient" >Lorem ipsum dolor sit.</a>
                    </div>
                </div>
                <div className="list">
                    <div className="title-list">
                        Hướng dẫn
                    </div>
                    <div className="list-item">
                        <a href="/category/shop-gifts" >Lorem ipsum</a>
                        <a href="/category/beauty-box" >Lorem, ipsum.</a>
                        <a href="/category/accessories" >Lorem.</a>
                        <a href="/category/skin-care" >Lorem, ipsum.</a>
                        <a href="/category/personal-care" >Lorem, ipsum.</a>
                        <a href="/category/shop-by-ingredient" >Lorem ipsum dolor sit.</a>
                    </div>
                </div>
                <div className="list">
                    <div className="title-list">
                        Thông tin
                    </div>
                    <div className="list-item">
                        <a href="/category/shop-gifts" >Lorem ipsum</a>
                        <a href="/category/beauty-box" >Lorem, ipsum.</a>
                        <a href="/category/accessories" >Lorem.</a>
                        <a href="/category/skin-care" >Lorem, ipsum.</a>
                        <a href="/category/makeup" >Lorem, ipsum.</a>

                    </div>
                </div>

            </div>
        </div >
    );
}

export default Footer;
