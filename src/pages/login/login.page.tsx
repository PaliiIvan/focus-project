import React from 'react';
import './/login.scss';
import { motion } from 'framer-motion';

interface Props {}

export const LoginPage = (props: Props) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ opacity: 0 }}
      className="login_component"
    >
      <motion.div
        animate={{ backdropFilter: 'blur(20px)' }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ backdropFilter: 'blur(0px)' }}
        className="login_container"
      >
        <div className="login">Login</div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <div className="signup_container">
            Or you can <span>SignUp</span>
          </div>
        </div>

        <button>LogIn</button>
      </motion.div>
    </motion.div>
  );
};
