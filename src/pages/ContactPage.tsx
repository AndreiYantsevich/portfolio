import React, {FC, memo} from 'react';

import ContactItem from '../components/ContactItem';
import Tittle from '../components/Tittle';

import Email from 'assets/svg/emailme.svg';
import Location from 'assets/svg/location.svg';
import Phone from 'assets/svg/phone.svg';

const ContactPage: FC = memo(() => (
    <div>
        <div className="title">
            <Tittle title="My Contact" span="My Contact"/>
        </div>
        <div className="ContactPage">
            <div className="map-sect">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54907.81184747283!2d27.61219163313687!3d53.78014912751382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd389a92311b7%3A0x5b402d6667699dc!2z0YPQuy4g0JzQvtC70L7QtNC10LbQvdCw0Y8gNywg0JzQsNGH0YPQu9C40YnQuA!5e0!3m2!1sru!2sby!4v1637110820438!5m2!1sru!2sby"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{border: 0}}
                    allowFullScreen
                    aria-hidden="false"
                />
            </div>
            <div className="contact-sect">
                <ContactItem icon={Phone} text1="+375 25 780-42-92" title="Phone"/>
                <ContactItem
                    icon={Email}
                    text1="yantsevich92@gmail.com"
                    title="Email"
                />
                <ContactItem
                    icon={Location}
                    text1="Machulischi, Molodezhnaya Street, 7"
                    text2="Belarus"
                    title="Address"
                />
            </div>
        </div>
    </div>
));

export default ContactPage;
