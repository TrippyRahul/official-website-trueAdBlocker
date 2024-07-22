import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import styles from "../../styles/blogpage.module.scss";

export const metadata = {
    title: "YouTube's Battle Against Ad Blockers Is Full Of New Twist",
    description:
        "The article talks about how YouTube is taking measures to counter the usage of applications like Ad Blockers. It also talks about the way YouTube Ad revenue works for different creators"
};


const Blog_3 = () => {
    const data = {
        alt: "YouTube's Battle Against Ad Blockers Is Full Of New Twist",
        heading: "YouTube's Battle Against Ad Blockers Is Full Of New Twist",
        intro: "Reddit users were the first to notice that YouTube is stepping up its campaign against ad blockers. A user on the Google-owned site shared a screenshot of a pop-up window restricting users from viewing a maximum of three films for free without any advertisements on the youtube subreddit. After that, the user has to enable advertisements or pay for a premium YouTube membership.  'It appears that you might be using an ad blocker,' the warning reads. Video playback will be banned unless YouTube is added to the allowlist or the <a href='/' class='text-blue-300'>ad blocker</a> is turned off. YouTube attempts to defend this by claiming that its advertisements fund creators and keep the service free for users.  This occurred one month after YouTube acknowledged experimenting with new techniques to turn off ad blocks. A similar pop-up that said flatly that 'ad blockers are not allowed' was seen by some users in May, prohibiting them from viewing any material. YouTube has somewhat loosened its position now. It appears that three films will suffice as an enticement for non-paying customers to join its premium service.  Similar to the previous test, only a few users see the pop-up. However, it indicates that YouTube is still committed to finding a means to persuade people to turn off their ad blockers.",
        heading1: "Will YouTube Implement Its Plan To Outlaw Ad Blockers?",
        text1: "How users respond to the new function will determine whether YouTube keeps clamping down on users who use ad blockers or eases off. If the Reddit comments section is any <a href='/' class='text-blue-300'>guide</a>, the response has been overwhelmingly negative, with the most popular comment criticizing YouTube's excessive number of advertisements. Users have long been irritated by YouTube's seemingly never-ending stream of advertisements, and the platform's efforts to address this issue have not gone far enough to calm them. In September of last year, YouTube started testing up to 11 consecutive bumper commercials, which are non-skippable 6-second video advertising. After a significant backlash, the trial was quickly discontinued. Aside from the fact that YouTube advertisements can be intrusive and bothersome, another issue with them is that some are just fraudulent. On YouTube, many people have encountered 'scam ads' that trick them into purchasing phony or suspicious goods, such as get-rich-quick schemes. Some of these advertisements even pose as well-known personalities or artists to fool their audience. Thus, many people understand the importance of these ad blockers in protecting their money and saving themselves from scams.",
        heading2: "Why Is YouTube Acting in This Way?",
        text2: "On the one hand, YouTube is following the trend of video content companies shifting toward paid subscriptions and offering incentives to viewers to pay twice or watch more advertising. For example, Netflix disclosed that it is discontinuing its $9.99/month, ad-free Basic plan. The Standard package will cost at least $15.49 a month for new viewers who wish to skip advertisements, which is a significant increase in cost.However, YouTube's ad revenue has decreased for the third consecutive quarter, which might have led its executives to investigate methods of increasing it and potential culprits. Ad-blockers have emerged as the most straightforward blame. What about artists, though? YouTube claims that you are supporting them by turning off your ad blockers. However, are you? Well, not quite.",
        heading3: "Not Every Author Gains From Disabling Their Ad Blocker",
        text3: "Suppose YouTube producers fulfill specific requirements, such as having at least 500 subscribers and 3,000 watch hours (for YouTube's Partner Program) in the previous year. In that case, they will be eligible for a portion of the platform's ad revenue. Ad revenue stability does not guarantee participation in the program, though. The topic of the video and the viewers' location are two critical elements that affect how much money you get from YouTube advertisements. However, the most vital component is the number of people who click on the adverts and watch them through to the end or for at least 30 seconds, whichever comes first. Ad revenue from YouTube and creators is only based on those views. Influencer Marketing Hub estimates that the average income from views is approximately $0.018 per view or $18 for every 1,000 views. The Business Insider revealed that influencers made between $1.61 and $29.30 for every 1,000 views. Thus, this figure can vary greatly.  Additionally, videos may unintentionally or on something of a whim be demonetized, which can further lower ad revenue. Because of this, YouTube creators can only obtain their channels solely through advertising and are more likely to turn to sponsorships and corporate partnerships, which offer a more reliable source of income and a means of reaching their viewers. Furthermore, YouTube retains around 45% of the money generated by advertisements for itself, but the money you pay directly to your preferred YouTuber essentially ends up in their pockets. In summary, because YouTube advertising depends on many uncontrollable factors, it is not a dependable source of revenue for most producers.  Because most views don't generate ad revenue, reducing ad blockers could not significantly affect producers' income. Donating directly to creators is a better approach to assist them since it guarantees that the funds go to the creators rather than Big Tech's endless coffers.",

    }

    return (
        <div className={styles.blogs}>
            <Navbar />
            <div className={styles.container}>
                <Image src="/YouTubesBattleAgainstAdBlockersIsFullOfNewTwist.png" width={400} height={500} className={styles.blogImage} alt={data.alt} />

                <div className={styles.text}>
                    <h1>{data?.heading}</h1>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.intro}</span>` }}></p>
                    <h3>{data?.heading1}</h3>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.text1}</span>` }}></p>
                    <h3>{data?.heading2}</h3>
                    <p>{data?.text2.intro}</p>
                    <h4>{data?.text2.heading1}</h4>
                    <p>{data?.text2}</p>
                    <h3>{data?.heading3}</h3>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.text3}</span>` }}></p>
                </div>
            </div>
            <Footer Footerdata={{footerBackground:'/usage1.png'}}/>
        </div>
    )
}

export default Blog_3;