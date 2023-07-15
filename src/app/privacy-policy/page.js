import React from "react";
import styles from "../styles/privacyPolicy.module.scss";


const PrivacyPolicy = () => {
  return (
    <div className={styles.privacy}>
      <div className={styles.container}>
        <h2>
          Privacy Policy for
          <br /> True AdBlocker
        </h2>

        <div className={styles.content}>
          <div className={styles.item}>
            <h4>Log Files</h4>
            <p>
              True AdBlocker follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services' analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Cookies and Web Beacons</h4>
            <p>
              Like any other website, True AdBlocker uses "cookies". These
              cookies are used to store information including visitors'
              preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the
              users' experience by customizing our web page content based on
              visitors' browser type and/or other information.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Google DoubleClick DART Cookie</h4>
            <p>
              Google is one of a third-party vendor on our site. It also uses
              cookies, known as DART cookies, to serve ads to our site visitors
              based upon their visit to www.website.com and other sites on the
              internet. However, visitors may choose to decline the use of DART
              cookies by visiting the Google ad and content network Privacy
              Policy at the following URL -{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
              >
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </div>
          <div className={styles.item}>
            <h4>Our Advertising Partners</h4>
            <p>
              Some of advertisers on our site may use cookies and web beacons.
              Our advertising partners are listed below. Each of our advertising
              partners has their own Privacy Policy for their policies on user
              data. For easier access, we hyperlinked to their Privacy Policies
              below.
              <ul>
                <li>Google</li>
                <li>
                  <a href="https://policies.google.com/technologies/ads">
                    https://policies.google.com/technologies/ads
                  </a>
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.item}>
            <h4>Privacy Policies</h4>
            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of True AdBlocker. Third-party ad servers
              or ad networks uses technologies like cookies, JavaScript, or Web
              Beacons that are used in their respective advertisements and links
              that appear on True AdBlocker, which are sent directly to users'
              browser. They automatically receive your IP address when this
              occurs. These technologies are used to measure the effectiveness
              of their advertising campaigns and/or to personalize the
              advertising content that you see on websites that you visit. Note
              that True AdBlocker has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Third Party Privacy Policies</h4>
            <p>
              True AdBlocker's Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options. You can
              choose to disable cookies through your individual browser options.
              To know more detailed information about cookie management with
              specific web browsers, it can be found at the browsers' respective
              websites. What Are Cookies?
            </p>
          </div>
          <div className={styles.item}>
            <h4>Children's Information</h4>
            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity. True AdBlocker does not knowingly collect any Personal
              Identifiable Information from children under the age of 13. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately and
              we will do our best efforts to promptly remove such information
              from our records.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Online Privacy Policy Only</h4>
            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in True AdBlocker. This policy is
              not applicable to any information collected offline or via
              channels other than this website.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Consent</h4>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
