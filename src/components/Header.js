import React, { Component } from 'react';
import '../style/headerStyle.sass'
class Header extends Component {
    render() {
        return (
            <div className="Header-wrap">
                <header className="header">
                    <div className='logos-wrap'>
                        <img width='124px' height='124px' src={require('../img/logo_npu.png')} alt="M.P. Dragomanov" className="logo"/>
                        <span>
                            Е-Портфоліо
                        </span>
                    </div>
                    <div className='whoUser-wrap'>
                        <span className='header-user-name'>
                            Фмілія Ім'я Побатькові
                        </span>
                        <button className='btn-in-out'>Вихід</button>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;