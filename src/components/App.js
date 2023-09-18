import NewsletterSignUp from "./NewsletterSignUp";
import '../styles.css';
import { useState } from "react";

function App() {
    const [email, setEmail] = useState("");

    return (
        <main className="main">
            <NewsletterSignUp email={email} setEmail={setEmail}/>
        </main>
    );
}

export default App;
