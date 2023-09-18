import { useState } from "react";
import SuccessMessage from "./SuccessMessage";
import '../newsletterSignUp.css';

export default function NewsletterSignUp() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleEmailChange = function(event) {
        setEmail(event.target.value);
    }

    const handleSubmit = function(event) {
        event.preventDefault();

        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!emailRegex.test(email)) {
            setError("Valid email required");
            return;
        } else {
            setError("");
            setIsSubmitted(true);
        }
    }

    return (
        <main>
            {isSubmitted ? (
                <SuccessMessage email={email} setIsSubmitted={setIsSubmitted} setEmail={setEmail}/>
            ) : (
                <section className="newsletter-sign-up">
                    <div className="newsletter-sign-up__image-container">
                        <picture>
                            <source srcSet="/images/illustration-sign-up-desktop.svg" media="(min-width: 58em)" />
                            <img className="newsletter-sign-up__image" src="/images/illustration-sign-up-mobile.svg"  alt="sign-up" />
                        </picture>
                        {/* <img 
                            className="newsletter-sign-up__image"
                            src="/images/illustration-sign-up-mobile.svg" 
                            alt="sign-up"
                        /> */}
                    </div>
                    <div className="newsletter-sign-up__container">
                        <h1 className="newsletter-sign-up__container-title">Stay updated!</h1>
                        <p className="newsletter-sign-up__container-p">Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul className="newsletter-sign-up__container-list">
                            <li className="newsletter-sign-up__container-point">
                                <img
                                    className="newsletter-sign-up__container-point-icon"
                                    src="/images/icon-list.svg"
                                    alt="list"
                                />
                                <p className="newsletter-sign-up__container-p">Product discovery and building what matters</p>
                            </li>
                            <li className="newsletter-sign-up__container-point">
                                <img
                                    className="newsletter-sign-up__container-point-icon"
                                    src="/images/icon-list.svg"
                                    alt="list"
                                />
                                <p className="newsletter-sign-up__container-p">Measuring to ensure updates are a success</p>
                            </li>
                            <li className="newsletter-sign-up__container-point">
                                <img
                                    className="newsletter-sign-up__container-point-icon"
                                    src="/images/icon-list.svg"
                                    alt="list"
                                />
                                <p className="newsletter-sign-up__container-p">And much more!</p>
                            </li>
                        </ul>
                        <form className="newsletter-sign-up__form" onSubmit={handleSubmit}>
                            <div className="newsletter-sign-up__label-container">
                                <label className="newsletter-sign-up__label" htmlFor="email">Email address</label>
                                {error && (
                                    <p className="newsletter-sign-up__error">{error}</p>
                                )}
                            </div>
                            <input
                                className={`newsletter-sign-up__input ${error ? 'newsletter-sign-up__input--error' : ''}`}
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email@company.com"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button className="button">Subscribe to monthly newsletter</button>
                        </form>
                    </div>
                </section>
            )}
        </main>
    )
}