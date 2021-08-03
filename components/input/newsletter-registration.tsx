// noinspection JSUnusedGlobalSymbols

import styles from './newsletter-registration.module.css';
import React, {useContext, useRef} from "react";
import NotificationContext from "../../store/notification-context";
import {Status} from "../../helpers/interfaces/notification";

const NewsletterRegistration = () => {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const notificationCtx = useContext(NotificationContext);

    const registrationHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        // fetch user input (state or refs)
        const enteredEmail = emailInputRef.current!.value;

        // send valid data to API
        notificationCtx.showNotification({
            title: `Signing up: ${enteredEmail}`,
            message: 'Registering for newsletter',
            status: Status.pending,
        });

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                body: JSON.stringify({email: enteredEmail}),
            });

            const data = await response.json();
            if (response.ok) {
                notificationCtx.showNotification({
                    title: `Success`,
                    message: 'Successfully registered for newsletter',
                    status: Status.success,
                });
            } else {
                // noinspection ExceptionCaughtLocallyJS
                throw new Error(data?.message || 'Something went wrong');
            }
        } catch (error) {
            notificationCtx.showNotification({
                title: `Error!`,
                message: error?.message || 'Something went wrong',
                status: Status.error,
            });
        }
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
