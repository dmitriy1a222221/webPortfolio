import React, { Component } from 'react';
import '../style/footerStyle.sass'

class Footer extends Component {
    render() {
        return (
            <div className="Footer-wrap">
                <footer className="footer">
                    <div className='aboutUniverp-wrap'>
                        <img width='124px' height='124px' src={require('../img/logo_npu.png')} alt="M.P. Dragomanov" className="logo"/>
                        <p className='usiver-name'>
                            Національний педагогічний університет імені М.П. Драгоманова
                        </p>
                    </div>
                    <div className="footer-more-inf">
                        <div className='devSupp-wrap'>
                            <p>
                                Розробка і підтримка системи:
                            </p>
                            <div className='link-wrap-dev'>
                                <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/dmitriy-kasyanchuk-20b290163/">
                                    Dmitriy Kasyanchuk
                                </a>
                                <img src={require("../img/link-solid.svg")} alt="link"/>
                            </div>
                        </div>
                        <div className='link-wrap'>
                            <a rel="noopener noreferrer" target='_blank' href="http://www.npu.edu.ua/ua/">
                                Портал університету
                            </a>
                            <img src={require("../img/link-solid.svg")} alt="link"/>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;