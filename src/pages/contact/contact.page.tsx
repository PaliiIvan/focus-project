import React from 'react';
import './contact.scss';
import { HelpCard } from '../../components';
// import WarningIcon from '../../svg/warning.svg';
// import TaxFreeIcon from '../../svg/tax-free.svg';
import { MeetingSvgIcon } from '../../svg/meeting.svg.component';
import { TaxFeeSvgIcon } from '../../svg/tax-fee.svg.component';
import { WarningSvgIcon } from '../../svg/warning.svg.components';

import { motion } from 'framer-motion';
import ImageFacebook from '../../image/iconmonstr-facebook-3.svg';
import ImageInstagram from '../../image/iconmonstr-instagram-13.svg';
import ImageTwitter from '../../image/iconmonstr-twitter-3.svg';

interface Props {}

export const ContactPage = (props: Props) => {
  return (
    <div className={'contact_container'}>
      <div className={'issue_container'}>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ opacity: 0 }}
          className={'description_title'}
        >
          How can we help You?
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{ opacity: 0, x: -50 }}
        >
          <HelpCard
            additionalStyle={'contact_help_card'}
            title="I can’t create account"
            description="Aliquam a ante commodo, fringilla est vitae, iaculis eros. Curabitur."
            icon={<WarningSvgIcon />}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{ opacity: 0, x: -50 }}
        >
          <HelpCard
            additionalStyle={'contact_help_card'}
            title="Can I use FREE version?"
            description="Suspendisse pulvinar eu augue rhoncus fringilla. Proin suscipit."
            icon={<TaxFeeSvgIcon color={'color_yellow'} />}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          style={{ opacity: 0, x: -50 }}
        >
          <HelpCard
            additionalStyle={'contact_help_card'}
            title="Can I become a Partner?"
            description="Sed sit amet porttitor erat. Donec ullamcorper efficitur nisl, ut mollis."
            icon={<MeetingSvgIcon color={'color_blue'} />}
          />
        </motion.div>
      </div>
      <div className={'contacts_container'}>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ opacity: 0, x: 50 }}
          className={'address_container'}
        >
          <div className={'description_title'}>Our contacts</div>
          <div className={'address'}>
            <div>
              <span>Address:</span> Mauris efficitur felis 43.
            </div>
            <div>
              <span>Phone:</span> (000) 555 555 43
            </div>
          </div>
          <div className={'social_media'}>
            <div className={''}>Social media:</div>
            <div className={'social-icons'}>
              <img src={ImageTwitter} alt={ImageTwitter} />
              <img src={ImageInstagram} alt={ImageInstagram} />
              <img src={ImageFacebook} alt={ImageFacebook} />
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          style={{ opacity: 0, x: 50 }}
          className={'forms_container'}
        >
          <div className={'description_title'}>Or send a message</div>
          <div className={'email_form'}>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="emai@example.com"></input>
          </div>
          <div className={'message_form'}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="You message..."></textarea>
          </div>
          <button className={'submit_btn'}>Submit</button>
        </motion.div>
      </div>
    </div>
  );
};
