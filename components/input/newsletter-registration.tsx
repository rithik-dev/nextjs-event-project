// noinspection JSUnusedGlobalSymbols

import styles from './newsletter-registration.module.css';
import React, {useRef} from "react";

const NewsletterRegistration = () => {
    const emailInputRef = useRef<HTMLInputElement>(null);

    const registrationHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        // fetch user input (state or refs)
        const enteredEmail = emailInputRef.current!.value;

        // send valid data to API
        const data = await (await fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({email: enteredEmail}),
        })).json();
        console.log(data);
    }

    return (
        <section className={styles.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={styles.control}>
                    <input
                        type='email'
                        id='email'
                        placeholder='Enter your email'
                        aria-label='Enter your email'
                        ref={emailInputRef}
                    />
                    <button>Register</button>
                </div>
            </form>
        </section>
    );
}

export default NewsletterRegistration;
