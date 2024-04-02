import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <>
                    <div className="row">
                        <div className="left-side">
                            <div className="links">
                                <ul>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 25"
                                            fill="none"
                                        >
                                            <path
                                                d="M1.5 9.1691V17.75C1.5 19.4069 2.84315 20.75 4.5 20.75H19.5C21.1569 20.75 22.5 19.4069 22.5 17.75V9.1691L13.5723 14.6631C12.6081 15.2564 11.3919 15.2564 10.4277 14.6631L1.5 9.1691Z"
                                                fill="#262626"
                                            />
                                            <path
                                                d="M22.5 7.40783V7.25C22.5 5.59315 21.1569 4.25 19.5 4.25H4.5C2.84315 4.25 1.5 5.59315 1.5 7.25V7.40783L11.2139 13.3856C11.696 13.6823 12.304 13.6823 12.7861 13.3856L22.5 7.40783Z"
                                                fill="#262626"
                                            />
                                        </svg>
                                        <a href="#">hello@skillbridge.com</a>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 25"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M1.5 5C1.5 3.34315 2.84315 2 4.5 2H5.87163C6.732 2 7.48197 2.58556 7.69064 3.42025L8.79644 7.84343C8.97941 8.5753 8.70594 9.34555 8.10242 9.79818L6.8088 10.7684C6.67447 10.8691 6.64527 11.0167 6.683 11.1197C7.81851 14.2195 10.2805 16.6815 13.3803 17.817C13.4833 17.8547 13.6309 17.8255 13.7316 17.6912L14.7018 16.3976C15.1545 15.7941 15.9247 15.5206 16.6566 15.7036L21.0798 16.8094C21.9144 17.018 22.5 17.768 22.5 18.6284V20C22.5 21.6569 21.1569 23 19.5 23H17.25C8.55151 23 1.5 15.9485 1.5 7.25V5Z"
                                                fill="#262626"
                                            />
                                        </svg>
                                        <a href="#">+91 91813 23 2309</a>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 25"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.5397 22.851C11.57 22.8685 11.5937 22.8821 11.6105 22.8915L11.6384 22.9071C11.8613 23.0294 12.1378 23.0285 12.3608 22.9075L12.3895 22.8915C12.4063 22.8821 12.43 22.8685 12.4603 22.851C12.5207 22.816 12.607 22.765 12.7155 22.6982C12.9325 22.5646 13.2388 22.3676 13.6046 22.1091C14.3351 21.5931 15.3097 20.8274 16.2865 19.8273C18.2307 17.8368 20.25 14.8462 20.25 11C20.25 6.44365 16.5563 2.75 12 2.75C7.44365 2.75 3.75 6.44365 3.75 11C3.75 14.8462 5.76932 17.8368 7.71346 19.8273C8.69025 20.8274 9.66491 21.5931 10.3954 22.1091C10.7612 22.3676 11.0675 22.5646 11.2845 22.6982C11.393 22.765 11.4793 22.816 11.5397 22.851ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                                                fill="#262626"
                                            />
                                        </svg>
                                        <a href="#">Somewhere in the World</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="footer-item">
                                <h3>Home</h3>
                                <nav>
                                    <a href="#">Benefites </a>
                                    <a href="#">Our Courses</a>
                                    <a href="#">Our Testimonials</a>
                                    <a href="#">Our FAQ</a>
                                </nav>
                            </div>
                            <div className="footer-item">
                                <h3>About Us</h3>
                                <nav>
                                    <a href="#">Company</a>
                                    <a href="#">Achievements</a>
                                    <a href="#">Our Goals</a>
                                </nav>
                            </div>
                            <div className="footer-item">
                                <h3>Social Profiles</h3>
                                <div className="buttons">
                                    <button>
                                        <img src="/facebook_169067.png"/>
                                    </button>
                                    <button>
                                        <img src="/twitter_253784.png"/>
                                    </button>
                                    <button>
                                        <img src="/linkedin_2190413.png"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line" />
                    <div className="text">© 2023 Skillbridge. All rights reserved.</div>
                </>

            </div>
        </footer>

    )
}