import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.scss'

// Import images
import twitterLogo from '../../Assets/Images/twitter-logo-4.png'
import photoBobur from '../../Assets/Images/Ellipse.jpg'
import photoGallery from '../../Assets/Images/1.png'
import photoGif from '../../Assets/Images/2.png'
import photoItem from '../../Assets/Images/3.png'
import photoSmile from '../../Assets/Images/4.png'
import photoWatch from '../../Assets/Images/5.png'
import photoDesign from '../../Assets/Images/Ellipse2.png'
import photoDesign2 from '../../Assets/Images/Ellipse3.png'
import photoDesign3 from '../../Assets/Images/Ellipse8.png'
import photoFood from '../../Assets/Images/image1.png'
import photoMushtariy from '../../Assets/Images/aaaa.png'
import photoShuxrat from '../../Assets/Images/bbb.png'

// Import profile icons

import commentIcon from '../../Assets/Images/Frame.png'
import circulationIcon from '../../Assets/Images/Frame2.png'
import likeIcon from '../../Assets/Images/Frame3.png'
import arrowIcon from '../../Assets/Images/Frame4.png'
import staticIcon from '../../Assets/Images/Frame5.png'
import likeeIcon from '../../Assets/Images/like.png'
import circulIcon from '../../Assets/Images/circul.png'

function Home() {
    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="main-page">
                        <div className="main-page__left">
                            <div className="hero__links">
                                <a className="hero__main-link" href="">
                                    <img
                                        className="hero__logo"
                                        src={twitterLogo}
                                        alt="Twitter logo"
                                        width="40"
                                        height="33"
                                    />
                                </a>

                                <ul className="hero__list">
                                    <li className="hero__item">
                                        <NavLink className="hero-link" to="/">
                                            Home
                                        </NavLink>
                                    </li>

                                    <li className="hero__item">
                                        <NavLink className="hero-link" to="">
                                            Explore
                                        </NavLink>
                                    </li>

                                    <li className="hero__item">
                                        <NavLink className="hero-link" to="">
                                            Notifications
                                        </NavLink>
                                    </li>

                                    <li className="hero__item">
                                        <NavLink className="hero-link" to="">
                                            Messages
                                        </NavLink>
                                    </li>

                                    <li className="hero__item">
                                        <NavLink className="hero-link" to="">
                                            Bookmarks
                                        </NavLink>
                                    </li>

                                    <li className="hero__item">
                                        <NavLink
                                            className="hero-link"
                                            to="/lists"
                                        >
                                            Lists
                                        </NavLink>
                                    </li>

                                    <li className="hero__item">
                                        <NavLink
                                            className="hero-link"
                                            to="/profile"
                                        >
                                            Profile
                                        </NavLink>
                                    </li>

                                    <li className="hero__item">
                                        <NavLink className="hero-link" to="">
                                            More
                                        </NavLink>
                                    </li>
                                </ul>

                                <button className="hero__button">Tweet</button>

                                <div className="hero__mini">
                                    <img
                                        className="hero__mini__image"
                                        src={photoBobur}
                                        alt="Bobur's photo"
                                        width={50}
                                        height={50}
                                    />

                                    <div className="hero__mini__box">
                                        <h3 className="hero__mini__box-heading">
                                            Bobur
                                        </h3>
                                        <a
                                            className="hero__mini__box-link"
                                            href="#"
                                        >
                                            @bobur_mavlonov
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-page__center">
                            <a
                                className="home__main-link list-group-item"
                                href="/"
                            >
                                Home
                            </a>

                            <div className="bobur-list list-group-item">
                                <div className="bobur-profile">
                                    <img
                                        className="bobur-profile__image"
                                        src={photoBobur}
                                        alt="Bobur's photo"
                                        width={60}
                                        height={60}
                                    />

                                    <h3 className="bobur-profile__heading">
                                        What's happening
                                    </h3>
                                </div>

                                <div className="bobur-profile-icons">
                                    <img
                                        className="bobur-profile-icon"
                                        src={photoGallery}
                                        alt="Icon"
                                        width={20}
                                        height={20}
                                    />

                                    <img
                                        className="bobur-profile-icon"
                                        src={photoGif}
                                        alt="Icon"
                                        width={20}
                                        height={20}
                                    />

                                    <img
                                        className="bobur-profile-icon"
                                        src={photoItem}
                                        alt="Icon"
                                        width={20}
                                        height={20}
                                    />

                                    <img
                                        className="bobur-profile-icon"
                                        src={photoSmile}
                                        alt="Icon"
                                        width={20}
                                        height={20}
                                    />

                                    <img
                                        className="bobur-profile-icon"
                                        src={photoWatch}
                                        alt="Icon"
                                        width={20}
                                        height={20}
                                    />

                                    <button className="bobur-profile__btn">
                                        Tweet
                                    </button>
                                </div>
                            </div>

                            <div className="design-list list-group-item">
                                <div className="design-profile">
                                    <img
                                        className="design-profile__image"
                                        src={photoDesign}
                                        alt="Photo"
                                        width={60}
                                        height={60}
                                    />

                                    <div className="design-profile__box">
                                        <div className="design-profile__box-mini">
                                            <h3 className="design-profile__box-mini__heading">
                                                Designsta
                                            </h3>

                                            <a
                                                className="design-profile__box-mini__link"
                                                href="#"
                                            >
                                                @inner · 25m
                                            </a>
                                        </div>
                                        <p className="design-profile__box-paragraph">
                                            Twitterdagi ayol-erkak
                                            qarama-qarshiliginglardan o'zinglar
                                            zerikmadinglarmi?
                                        </p>
                                    </div>
                                </div>
                                <div className="design-profile-icons">
                                    <img
                                        className="design-profile-icon"
                                        src={commentIcon}
                                        alt="Icon"
                                        width={52}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={circulationIcon}
                                        alt="Icon"
                                        width={43}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={likeIcon}
                                        alt="Icon"
                                        width={43}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={arrowIcon}
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={staticIcon}
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>

                            <div className="design-list list-group-item">
                                <div className="design-profile">
                                    <img
                                        className="design-profile__image"
                                        src={photoDesign2}
                                        alt="Photo"
                                        width={60}
                                        height={40}
                                    />

                                    <div className="design-profile__box">
                                        <div className="design-profile__box-mini--2">
                                            <h3 className="design-profile__box-mini__heading">
                                                cloutexhibition
                                            </h3>

                                            <a
                                                className="design-profile__box-mini__link"
                                                href="#"
                                            >
                                                @RajLahoti · 22m
                                            </a>
                                        </div>
                                        <p className="design-profile__box-paragraph--2">
                                            YPIP dasturining bu yilgi sezoni ham
                                            o’z nihoyasiga yetmoqda. Mentorlik
                                            davomida talaba va yangi
                                            bitiruvchilarni o’sayotganini ko’rib
                                            hursand bo’ladi odam.
                                        </p>
                                    </div>
                                </div>

                                <div className="design-profile-icons">
                                    <img
                                        className="design-profile-icon"
                                        src={commentIcon}
                                        alt="Icon"
                                        width={52}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={circulIcon}
                                        alt="Icon"
                                        width={43}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={likeeIcon}
                                        alt="Icon"
                                        width={43}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={arrowIcon}
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={staticIcon}
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>

                            <div className="design-list list-group-item">
                                <div className="design-profile">
                                    <img
                                        className="design-profile__image"
                                        src={photoDesign3}
                                        alt="Photo"
                                        width={60}
                                        height={40}
                                    />

                                    <div className="design-profile__box">
                                        <div className="design-profile__box-mini--3">
                                            <h3 className="design-profile__box-mini__heading">
                                                CreativePhoto
                                            </h3>

                                            <a
                                                className="design-profile__box-mini__link"
                                                href="#"
                                            >
                                                @cloutexhibition · 1h
                                            </a>
                                        </div>
                                        <p className="design-profile__box-paragraph">
                                            Обетда..... Кечиринглар
                                        </p>
                                    </div>
                                </div>

                                <img
                                    className="design-profile__box-image"
                                    src={photoFood}
                                    alt="Food"
                                    width={680}
                                    height={455}
                                />

                                <div className="design-profile-icons--2">
                                    <img
                                        className="design-profile-icon"
                                        src={commentIcon}
                                        alt="Icon"
                                        width={52}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={circulationIcon}
                                        alt="Icon"
                                        width={43}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={likeIcon}
                                        alt="Icon"
                                        width={43}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={arrowIcon}
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                    />

                                    <img
                                        className="design-profile-icon"
                                        src={staticIcon}
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="main-page__right">
                            <input
                                className="search-twitter-input"
                                type="text"
                                placeholder="Seacrh Twitter "
                            />

                            <div className="trend">
                                <h3 className="trend-heading">
                                    Trends for you
                                </h3>
                                <ul className="trend-list">
                                    <li className="trend-item">
                                        <h4 className="trend-title">
                                            Trending in Germany
                                        </h4>
                                        <p className="trend-paragraph">
                                            Revolution
                                        </p>

                                        <p className="trend-paragraph-tweet">
                                            50.4K Tweets
                                        </p>
                                    </li>

                                    <li className="trend-item">
                                        <h4 className="trend-title">
                                            Trending in Germany
                                        </h4>
                                        <p className="trend-paragraph">
                                            <strong>Revolution</strong>
                                        </p>

                                        <p className="trend-paragraph-tweet">
                                            50.4K Tweets
                                        </p>
                                    </li>

                                    <li className="trend-item">
                                        <h4 className="trend-title">
                                            Trending in Germany
                                        </h4>
                                        <p className="trend-paragraph">
                                            <strong>Revolution</strong>
                                        </p>

                                        <p className="trend-paragraph-tweet--3">
                                            50.4K Tweets
                                        </p>
                                    </li>
                                </ul>

                                <a className="trend-link" href="#">
                                    Show more
                                </a>
                            </div>

                            <div className="box">
                                <div className="people">
                                    <h3 className="people__title">
                                        You might like
                                    </h3>

                                    <div className="people__mini">
                                        <img
                                            className="people__mini__image"
                                            src={photoMushtariy}
                                            alt="Bobur's photo"
                                            width={50}
                                            height={50}
                                        />

                                        <div className="people__mini__box">
                                            <h3 className="people__mini__box-heading">
                                                Mushtariy
                                            </h3>
                                            <a
                                                className="people__mini__box-link"
                                                href="#"
                                            >
                                                @Mushtar565266
                                            </a>
                                        </div>

                                        <button className="people__mini__button">
                                            Follow
                                        </button>
                                    </div>
                                </div>

                                <div className="people__mini">
                                    <img
                                        className="people__mini__image"
                                        src={photoShuxrat}
                                        alt="Bobur's photo"
                                        width={50}
                                        height={50}
                                    />

                                    <div className="people__mini__box">
                                        <h3 className="people__mini__box-heading">
                                            Shuhratbek
                                        </h3>
                                        <a
                                            className="people__mini__box-link"
                                            href="#"
                                        >
                                            @mrshukhrat
                                        </a>
                                    </div>

                                    <button className="people__mini__button">
                                        Follow
                                    </button>
                                </div>
                            </div>

                            <ul className="extra-list">
                                <li className="extra-item">
                                    <a className="extra-link" href="#">
                                        Terms of Service
                                    </a>
                                </li>

                                <li className="extra-item">
                                    <a className="extra-link" href="#">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li className="extra-item">
                                    <a className="extra-link" href="#">
                                        Cookie Policy
                                    </a>
                                </li>

                                <li className="extra-item">
                                    <a className="extra-link" href="#">
                                        Imprint
                                    </a>
                                </li>

                                <li className="extra-item">
                                    <a className="extra-link" href="#">
                                        Ads Info
                                    </a>
                                </li>

                                <li className="extra-item">
                                    <a className="extra-link" href="#">
                                        More ···
                                    </a>
                                </li>

                                <li className="extra-item">
                                    <a className="extra-link" href="#">
                                        © 2021 Twitter, Inc.
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
