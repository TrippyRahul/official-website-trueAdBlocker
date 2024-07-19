import React from "react";
import styles from "../styles/termsAndCondition.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const TermsAndCondition = () => {
  return (
    <div className={styles["terms-condition"]}>
      <Navbar />
      <div className={styles.container}>
        <h2>END USER LICENSE AGREEMENT</h2>
        <div className={styles.content}>
          <div className={styles.item}>
            <p>
              These Terms of Service and End User License Agreement
              (collectively, the &quot;Agreement&quot;) are an agreement between
              Total Security Limited (incorporated in England under number
              10161957) conducting business (or trading) as
              Trueadblocker(&quot;Security Group&quot;, &quot;we&quot; or
              &quot;our&quot;) and you (&quot;you,&quot; &quot;yourself,&quot;
              &quot;User&quot; or &quot;Customer&quot;). This Agreement
              establishes the terms and conditions for your use of all our
              Security Group goods and services (collectively, the
              &quot;Services&quot;). Within the limits of such Services, this
              Agreement applies to both (i) your service plan and (ii) any extra
              services you acquire to supplement your service plan, as indicated
              on our Services and Prices page. By accessing, using, registering
              for, or receiving any of the Services, you agree to the terms and
              conditions listed below and those included in our Privacy Policy
              (&quot;Policies&quot;), which are integrated by reference into
              this Agreement. Additional terms may apply to specific Services
              that you purchase. In such instances, the supplementary terms will
              apply in addition to this Agreement. You are not permitted to
              access or use the Services if you disagree with these Terms and
              Conditions and our Policies. Our Security Group has the right to
              alter this Agreement from time to time to reflect changes in or
              requirements of relevant law, as well as revisions or updates to
              the Services. Our security group shall notify you if such a change
              materially impacts your rights under this Agreement. Changes will
              not apply retroactively, and unless the change is necessary to be
              effective instantly for regulatory or security purposes, notice of
              the amended terms will be provided at least a reasonable time
              before the changes take effect. If you disagree to be bound by
              this Agreement, our Policies, or any later changes, you must
              discontinue using the Services.
            </p>
          </div>
          <div className={styles.item}>
            <h4>
              Governing law and Litigation for consumers in the United States
            </h4>
            <ul>
              <li>
                For users in the United States, the laws of the State of
                California govern this Agreement, including any disputes arising
                out of, in connection with, or about your use of the Services.
                The United Nations Convention on Contracts for the International
                Sale of Goods and any other comparable law, rule, or statute in
                effect in any other jurisdiction shall not apply to this
                Agreement.
              </li>
              <li>
                All fees and taxes will be processed on our behalf by the
                Security LLC, a Delaware limited liability organization. This
                will not affect the pricing indicated in Our Services & pricing,
                and you will incur no additional fees.
              </li>
              <li>
                Suppose an issue arising from or related to this Agreement is
                brought to arbitration. In that case, it will be resolved by
                arbitration by a single arbitrator selected by our Security
                Group by the commercial arbitration rules of the American
                Arbitration Association (&quot;AAA&quot;), as modified by this
                Agreement, and will be administered by the AAA. The corporate
                arbitration rules of the Commercial Dispute Resolution
                Procedures and the Supplementary Procedures for Consumer Related
                Disputes (collectively, &quot;AAA Rules&quot;) will apply. The
                arbitration process before the AAA will only be conducted
                individually; claims submitted in a supposedly representative
                role on behalf of any person(s) or the basis of a class action
                will not be eligible for arbitration. The arbitrator will decide
                all matters, including the extent of this arbitration clause,
                although he or she will be subject to the provisions of this
                Agreement. The AAA site in California that our Security Group
                selects will host the arbitration. Our Security Group will cover
                as much of your filing, administrative duties, and arbitrator
                fees associated with the arbitration as the arbitrator
                reasonably determines necessary to keep the arbitration from
                being cost-prohibitive, provided you can show that the costs of
                arbitration will be prohibitive when compared to the costs of
                Litigation. However, the AAA Rules will regulate the payment of
                any arbitration fees if the arbitrator determines that the
                remedy sought or the substance of your claim is unlawful or not
                warranted, as judged by the requirements outlined in the Federal
                Rule of Civil Procedure 11(b). In such a scenario, you consent
                to pay our Security Group back for any money it has already paid
                out that would otherwise be your responsibility to pay under the
                AAA Rules. Our Security Group will pay back your reasonable
                legal fees and other costs associated with the arbitration if
                the arbitrator grants you relief equal to or greater than the
                amount of your demand.
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h4>Jurisdiction & Governing Law for Users Outside of the US</h4>
            <ul>
              <li>
                This Agreement and any non-contractual obligations arising from
                or related to it for users outside of the United States shall be
                governed by and construed by the laws of England and Wales,
                except any mandatory provisions of consumer law in the country
                in which you reside. This Agreement shall not be governed by the
                United Nations Convention on Contracts for the International
                Sale of Goods or any comparable legislation, rule, or statute in
                force in any other jurisdiction.
              </li>
              <li>
                By using the Services, you and our Security Group irrevocably
                agree that any dispute or claim arising out of or related to
                this Agreement (including your use of the Services), its subject
                matter or formation may be resolved by the non-exclusive
                jurisdiction of the courts of the nation in which you reside.
              </li>
              <li>
                If you are located in the European Union and the United Kingdom
                is a member state during the dispute or are involved in any
                transitional arrangements or new trade deals, you may also take
                the matter up with an alternative dispute resolution body in
                your home jurisdiction. This can be done using the EU
                Commission&apos;s Online Dispute Resolution (ODR) Platform.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer Footerdata={{footerBackground:'/usage1.png'}}/>
    </div>
  );
};

export default TermsAndCondition;
