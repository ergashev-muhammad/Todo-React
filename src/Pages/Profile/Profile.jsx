import React from 'react'
import { NavLink } from 'react-router-dom'
import './Profile.scss'

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
import photoCity from '../../Assets/Images/imageee.jpg'

// Import profile icons

import commentIcon from '../../Assets/Images/Frame.png'
import circulationIcon from '../../Assets/Images/Frame2.png'
import likeIcon from '../../Assets/Images/Frame3.png'
import arrowIcon from '../../Assets/Images/Frame4.png'
import staticIcon from '../../Assets/Images/Frame5.png'
import likeeIcon from '../../Assets/Images/like.png'
import circulIcon from '../../Assets/Images/circul.png'

import boburMavlonov from '../../Assets/Images/Rectangle1.png'
import bobur from '../../Assets/Images/Bobur.png'
import abcd1 from '../../Assets/Images/abcd(1).png'
import abcd2 from '../../Assets/Images/abcd(2).png'
import abcd3 from '../../Assets/Images/abcd(3).png'
import abcd4 from '../../Assets/Images/abcd(4).png'
import abcd5 from '../../Assets/Images/abcd(5).png'
import abcd6 from '../../Assets/Images/abcd(6).png'

function Profile() {
    return (
        <>
            <section className="profile">
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
                            <div className="profile-main list-group-item">
                                <a className="profile__main-link " href="/">
                                    Bobur
                                </a>

                                <p className="profile-tweet">1,070 Tweets</p>
                            </div>

                            <img
                                className="main-page--image"
                                src={boburMavlonov}
                                alt="Photo"
                                width={910}
                                height={280}
                            />

                            <div className="profile-info list-group-item">
                                <img
                                    className="profile-info-photo"
                                    src={bobur}
                                    alt="Photo"
                                    width={150}
                                    height={150}
                                />

                                <button className="profile-info__btn">
                                    Edit
                                </button>

                                <h4 className="profile-info__heading">Bobur</h4>

                                <a className="profile-info__link" href="#">
                                    @bobur_mavlonov
                                </a>

                                <p className="profile-info__paragraph">
                                    UX&UI designer at @abutechuz
                                </p>

                                <ul className="profile-info__list">
                                    <li className="profile-info__item">
                                        Mashag’daman
                                    </li>
                                    <li className="profile-info__item">
                                        t.me/boburjon_mavlonov
                                    </li>
                                    <li className="profile-info__item">
                                        Born November 24, 2000
                                    </li>
                                    <li className="profile-info__item">
                                        Joined May 2020
                                    </li>
                                </ul>

                                <ul className="profile-info__follow-list">
                                    <li className="profile-info__follow-item">
                                        <strong className="profile-info__follow-item__strong">
                                            67
                                        </strong>
                                        Following
                                    </li>
                                    <li className="profile-info__follow-item">
                                        <strong className="profile-info__follow-item__strong">
                                            47
                                        </strong>
                                        Followers
                                    </li>
                                </ul>

                                <ul className="profile-info__chat-list">
                                    <li className="profile-info__chat-item--1">
                                        Tweets
                                    </li>
                                    <li className="profile-info__chat-item">
                                        Tweets & replies
                                    </li>
                                    <li className="profile-info__chat-item">
                                        Media
                                    </li>
                                    <li className="profile-info__chat-item">
                                        Likes
                                    </li>
                                </ul>
                            </div>

                            <div className="design-list list-group-item">
                                <h4 className="design-list__tweet">
                                    Pinned Tweet
                                </h4>
                                <div className="design-profile">
                                    <img
                                        className="design-profile__image"
                                        src={bobur}
                                        alt="Photo"
                                        width={60}
                                        height={60}
                                    />

                                    <div className="design-profile__box">
                                        <div className="design-profile__box-mini--4">
                                            <h3 className="design-profile__box-mini__heading">
                                                Bobur
                                            </h3>

                                            <a
                                                className="design-profile__box-mini__link"
                                                href="#"
                                            >
                                                @bobur_mavlonov · Apr 1
                                            </a>
                                        </div>
                                        <p className="design-profile__box-paragraph--1">
                                            4-kursni tugatgunimcha kamida bitta
                                            biznesim bo'lishini, uylanish uchun
                                            moddiy jihatdan to'la-to'kis tayyor
                                            bo'lishni, sog'lik va jismoniy
                                            holatni normallashtirishni reja
                                            qildim
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
                                        src={bobur}
                                        alt="Photo"
                                        width={60}
                                        height={40}
                                    />

                                    <div className="design-profile__box">
                                        <div className="design-profile__box-mini--5">
                                            <h3 className="design-profile__box-mini__heading">
                                                Bobur
                                            </h3>

                                            <a
                                                className="design-profile__box-mini__link"
                                                href="#"
                                            >
                                                @bobur_mavlonov · Apr 1
                                            </a>
                                        </div>
                                        <p className="design-profile__box-paragraph--2">
                                            Bizda shunaqa bir illat bor: gap
                                            bo'lsa bo'ldi, nima deyayotganimizga
                                            qarab ham o'tirmaymiz. Bitta biznes
                                            trener nito gapirib qo'ysa, hamma
                                            biznes trenerlar yomonga chiqadi
                                            slishkom aqlli odamlar nazdida. Gap
                                            faqat biznes trenerlar haqida emas.
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
                                        src={bobur}
                                        alt="Photo"
                                        width={60}
                                        height={40}
                                    />

                                    <div className="design-profile__box">
                                        <div className="design-profile__box-mini--6">
                                            <h3 className="design-profile__box-mini__heading">
                                                Bobur
                                            </h3>

                                            <a
                                                className="design-profile__box-mini__link"
                                                href="#"
                                            >
                                                @bobur_mavlonov · Apr 1
                                            </a>
                                        </div>
                                        <p className="design-profile__box-paragraph">
                                            A bo'pti maskamasman
                                        </p>
                                    </div>
                                </div>

                                <img
                                    className="design-profile__box-image--2"
                                    src={photoCity}
                                    alt="Food"
                                    width={680}
                                    height={450}
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
                                className="search-twitter-input--2"
                                type="text"
                                placeholder="Seacrh Twitter "
                            />

                            <ul className="main-page__photos">
                                <li className="main-page__photo">
                                    <img
                                        className="main-page__image"
                                        src={abcd4}
                                        alt="Image"
                                        width={118}
                                        height={90}
                                    />
                                </li>
                                <li className="main-page__photo">
                                    <img
                                        className="main-page__image"
                                        src={abcd1}
                                        alt="Image"
                                        width={118}
                                        height={90}
                                    />
                                </li>
                                <li className="main-page__photo">
                                    <img
                                        className="main-page__image"
                                        src={abcd3}
                                        alt="Image"
                                        width={118}
                                        height={90}
                                    />
                                </li>
                                <li className="main-page__photo">
                                    <img
                                        className="main-page__image"
                                        src={abcd2}
                                        alt="Image"
                                        width={118}
                                        height={90}
                                    />
                                </li>
                                <li className="main-page__photo">
                                    <img
                                        className="main-page__image"
                                        src={abcd6}
                                        alt="Image"
                                        width={118}
                                        height={90}
                                    />
                                </li>
                                <li className="main-page__photo">
                                    <img
                                        className="main-page__image"
                                        src={abcd5}
                                        alt="Image"
                                        width={118}
                                        height={90}
                                    />
                                </li>
                            </ul>

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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
