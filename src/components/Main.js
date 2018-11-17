import React, { Component } from 'react';
import '../style/mainStyle.sass'
class Main extends Component {
    render() {
        return (
            <div className="Main-wrap">
                <div className="main">
                    <p className='main-title-form'>Заповніть відомості про себе</p>
                    <form action="#" method='post' className='main-form'>
                        <ul className="form-list">
                            <li>
                                <span className="name-field">
                                    Прізвище
                                </span><
                                input type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Ім'я
                                </span>
                                <input type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Побатькові
                                </span>
                                <input type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    E-mail
                                </span>
                                <input type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Дата народження
                                </span>
                                <input type="date"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Фото користувача
                                </span>
                                <input type="file"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Зайнятість
                                </span>
                                <select name="" id="">
                                    <option value="">Штатний співробітник1</option>
                                    <option value="">Штатний співробітник2</option>
                                    <option value="">Штатний співробітник3</option>
                                </select>
                            </li>
                            <li>
                                <span className="name-field">
                                    Посада
                                </span>
                                <select name="" id="">
                                    <option value="">Не обрано1</option>
                                    <option value="">Не обрано2</option>
                                    <option value="">Не обрано3</option>
                                </select>
                            </li>
                            <li>
                                <span className="name-field">
                                    Розмір ставки
                                </span>
                                <input type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Підрозділ
                                </span>
                                <select name="" id="">
                                    <option value="">Не обрано1</option>
                                    <option value="">Не обрано2</option>
                                    <option value="">Не обрано3</option>
                                </select>
                            </li>
                            <li>
                                <span className="name-field">
                                    Кафедра
                                </span>
                                <select name="" id="">
                                    <option value="">Не обрано1</option>
                                    <option value="">Не обрано2</option>
                                    <option value="">Не обрано3</option>
                                </select>
                            </li>
                            <li>
                                <span className="name-field">
                                    Вчене звання
                                </span>
                                <input type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Науковий ступінь
                                </span>
                                <input type="text"/>
                            </li>
                            <li>
                                <div className="plugins-data-wrap">
                                    <span className="name-field">
                                        Освіта
                                    </span>
                                    <div className='textarea-wrap'>
                                    <textarea
                                        name="data" id=""
                                        cols="30" rows="15"
                                        placeholder='Відомості про освіту (назва навчального закладу, рік завершення, тощо; кожен з нового рядка)'
                                    >
                                    </textarea>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="plugins-data-wrap">
                                    <span className="name-field">
                                        Перелік місць<br/> роботи
                                    </span>
                                    <div className='textarea-wrap'>
                                    <textarea
                                        name="data" id=""
                                        cols="30" rows="15"
                                        placeholder='Перелік місць роботи (установа, посада, рік, тощо; окремо з нового рядка)'
                                    >
                                    </textarea>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="plugins-data-wrap">
                                    <span className="name-field">
                                        Теми десертанцій<br/> (захищених)
                                    </span>
                                    <div className='textarea-wrap'>
                                    <textarea
                                        name="data" id=""
                                        cols="30" rows="15"
                                        placeholder='Перелік місць роботи (установа, посада, рік, тощо; окремо з нового рядка)'
                                    >
                                    </textarea>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="plugins-data-wrap">
                                    <span className="name-field">
                                        Громадська<br/> активнівть
                                    </span>
                                    <div className='textarea-wrap'>
                                    <textarea
                                        className='social-activity'
                                        name="data" id=""
                                        cols="30" rows="5"
                                        placeholder='Громадська активність (окремо з нового рядка)'
                                    >
                                    </textarea>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className="name-field">
                                    Посилання на сторінку Google Академії
                                </span>
                                <input type="text" placeholder='Посилання на сторінку Google Академії'/>
                            </li>
                            <li>
                                <span className="name-field">
                                    LinkedIn
                                </span>
                                <input type="text" placeholder='Посилання на профіль LinkedIn'/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Facebook
                                </span>
                                <input type="text" placeholder='Посилання на профіль Facebook'/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Google Plus
                                </span>
                                <input type="text" placeholder='Посилання на профіль Google Plus'/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Сторінка користувача
                                </span>
                                <input type="text" placeholder='Посилання на особистий сайт, блог, тощо.'/>
                            </li>
                            <li>
                                <span className="name-field">
                                    ResearcherID
                                </span>
                                <input type="text" placeholder='Посилання на ResearcherID'/>
                            </li>
                            <li>
                                <span className="name-field">
                                    ORCID
                                </span>
                                <input type="text" placeholder='Посилання на ORCID'/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Scopus
                                </span>
                                <input type="text" placeholder='Посилання на Scopus'/>
                            </li>
                            <li>
                                <div className="btn-wrap">
                                    <button className='btn btn_save' type='submit'>Зберегти</button>
                                    <button className='btn btn_cancel'>Скасувати</button>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default Main;