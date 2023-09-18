export default function NewsletterSignUp() {
    return (
        <section className="newsletter-sign-up">
            <div className="newsletter-sign-up__image-container">
                <img 
                    className="newsletter-sign-up__image"
                    src="/images/illustration-sign-up-mobile.svg" 
                    alt="sign-up"
                />
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
                <form className="newsletter-sign-up__form">
                    <div className="newsletter-sign-up__label-container">
                        <label className="newsletter-sign-up__label" htmlFor="email">Email address</label>
                    </div>
                    <input
                        className="newsletter-sign-up__input"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email@company.com"
                    />
                    <button className="newsletter-sign-up__button">Subscribe to monthly newsletter</button>
                </form>
            </div>
        </section>
    )
}