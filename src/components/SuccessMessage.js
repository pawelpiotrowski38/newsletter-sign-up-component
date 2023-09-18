import '../successMessage.css';

export default function SuccessMessage({email, setIsSubmitted, setEmail}) {

    const handleClick = function() {
        setEmail("");
        setIsSubmitted(false);
    }

    return (
        <section className="success-message">
            <img className="success-message__image" src="/images/icon-success.svg" alt="success" />
            <h1 className="success-message__title">Thanks for subscribing!</h1>
            <p className="success-message__p">
                A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.
            </p>
            <button className="button" onClick={handleClick}>Dismiss message</button>
        </section>
    )
}