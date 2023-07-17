import React from "react";
import styles from "../styles/disclaimer.module.scss";


const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <div className={styles.container}>
        <h2>Disclaimer</h2>

        <div className={styles.content}>
          <div className={styles.item}>
            <p>
              All the information on this website -{" "}
              <a href="https://TrueAdBlocker.com/" target="_blank">
                https://TrueAdBlocker.com/
              </a>
              - is published in good faith and for general information purpose
              only. True AdBlocker does not make any warranties about the
              completeness, reliability and accuracy of this information. Any
              action you take upon the information you find on this website
              (True AdBlocker), is strictly at your own risk. True AdBlocker
              will not be liable for any losses and/or damages in connection
              with the use of our website.
            </p>
          </div>
          <div className={styles.item}>
            <p>
              From our website, you can visit other websites by following
              hyperlinks to such external sites. While we strive to provide only
              quality links to useful and ethical websites, we have no control
              over the content and nature of these sites. These links to other
              websites do not imply a recommendation for all the content found
              on these sites. Site owners and content may change without notice
              and may occur before we have the opportunity to remove a link
              which may have gone &apos;bad&apos;.
            </p>
          </div>
          <div className={styles.item}>
            <p>
              Please be also aware that when you leave our website, other sites
              may have different privacy policies and terms which are beyond our
              control. Please be sure to check the Privacy Policies of these
              sites as well as their &quot;Terms of Service&quot; before engaging in any
              business or uploading any information.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Consent</h4>
            <p>
              By using our website, you hereby consent to our disclaimer and
              agree to its terms.
            </p>
          </div>
          <div className={styles.item}>
            <h4>Update</h4>
            <p>
              Should we update, amend or make any changes to this document,
              those changes will be prominently posted here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
