import React from "react";
import styles from "../styles/privacyPolicy.module.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacy}>
      <Navbar />
      <div className={styles.container}>
        <h2>Privacy Policy for True AdBlocker</h2>

        <div className={styles.content}>
          <div className={styles.item}>
            <h4>Personal Information</h4>
            <p>
              It applies the collection and use of personal data for users by
              Trueadblocker. We take personal information like your name,
              contact number, email ID, etc. But we never disclose our
              customer&apos;s information without their knowledge. We also
              collect information about the device from where you have access
              including the IP address.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Personal information regarding your children</h4>
            <p>
              These cookies are essential for enabling you to navigate the
              website and enhance its features including secure areas. Without
              these important services like security, e-billing is not possible.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Strictly Necessary Cookies:</h4>
            <p>
              Google is one of a third-party vendor on our site. It also uses
              cookies, known as DART cookies, to serve ads to our site visitors
              based upon their visit to www.website.com and other sites on the
              internet. However, visitors may choose to decline the use of DART
              cookies by visiting the Google ad and content network Privacy
              Policy at the following URL -{" "}
            </p>
          </div>
          <div className={styles.item}>
            <h4>Performance Cookies:</h4>
            <p>
              It collect all the information about your website usage that helps
              to improve its functionality.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Functionality Cookies:</h4>
            <p>
              Remember your preference while you visit our website including
              computer configuration and provide personalized features on the
              website.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Advertising Cookies:</h4>
            <p>
              It deliver adverts tailored to your interests and helps to limit
              the number of times that you see an advertisement. It is basically
              placed by advertisers with our permission. <br /> <br />
              If you want to disable cookies then you can but it may impact
              website functionality and access to certain areas or features. For
              that, you need to adjust your browser settings to refuse cookies.
            </p>
          </div>
          <div className={styles.item}>
            <h4>How we communicate with your</h4>
            <p>
              We send you various types of communications including emails, SMS,
              desktop alerts, or other notifications.
            </p>
            <ul>
              <li>Notifications regarding detected issues.</li>
              <li>Alerts about the expiration of your account.</li>
              <li>Your status report on our website.</li>
              <li>Notices about our service and software updates.</li>
              <li>Requests for feedback.</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h4>How we protect your data</h4>
            <p>
              Your personal information offered to us is stored in secure
              facilities which is only accessible to authorized personnel. We
              have secured an operating environment inaccessible to unauthorized
              users and complete security cannot be guaranteed. It is free to
              use, hence there are no charges. <br /> <br /> Note- If you want
              to have more information regarding our privacy policy, you can
              mail us on your official ID. We will be happy to help you.
            </p>
          </div>

          {/* <div className={styles.item}>
            <h4>Consent</h4>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
