import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import styles from "../../styles/blogpage.module.scss";

export const metadata = {
    title: "TrueAdblocker – Adblock extension for Internet Explorer",
    description:
        "The article discusses how and why you should add a Trueadblocker extension for Internet Explorer. It also mentions the steps to add the extension safely without any issues."
};

const Blog_2 = () => {
    const data = {
        alt: "Adblock extension for Internet Explorer",
        heading: "TrueAdblocker – Adblock extension for Internet Explorer",
        intro: "Microsoft Windows operating systems come with Internet Explorer, which was once the most widely used web browser and is currently ranked second globally. It makes sense that among the tens of millions of users of this browser, a significant portion would prefer to surf the Internet without advertisements because they find all these banners and pop-ups annoying (much like those who use the <a href='/'>Adblock extension</a> addon for Chrome and Firefox, Opera, and Safari).",
        heading1: "Internet Explorer ad blocking",
        text1: "Regretfully, Internet Explorer's plugin working method is pretty particular and not designed for creating TrueAdblocker extensions, unlike the browsers mentioned above. Furthermore, creating plugins for Internet Explorer is challenging. Due to these factors, Internet Explorer was circumvented by various plugins, extensions, and addons intended for ad blocking. While there are many excellent adblockers (like TrueAdblock extension, TrueAdblocker Plus, No Ads, and others) that block pop-ups and remove ads on other browser platforms, there is currently only one TrueAdblocker that, despite its limitations, functions: the TrueAdblocker Plus extension for Internet Explorer. <br/> <br/> Unfortunately, there are several significant drawbacks to this ad blocker. The following issues with TrueAdblocker + for Internet Explorer have been reported by the creators themselves on the official website:",
        list: {
            item1: "The issue is finding the TrueAdblocker symbol. It can be found in Internet Explorer's status bar, which is, by default, buried in the most recent versions. It makes it highly challenging to oversee the extension job.",
            item2: "There are occasions when Internet Explorer differs from Firefox and Chrome in how advertisements are blocked. Sometimes, the Adblock extension for IE cannot eliminate the ads.",
            item3: "Metro mode Both Windows 8 and Windows RT's Internet Explorers are restricted environments that forbid the execution of any third-party software, including TrueAdblocker Plus. For this reason, TrueAdblocker Plus is incompatible with Internet Explorer 10 and IE 11's Metro mode and Modern UI."
        },
        subtext: "This ad blocker's value is greatly diminished by the abovementioned problems, particularly the inability to function in the Metro UI. With TrueAdblocker Team, you may accomplish your aim and block advertising in Internet Explorer using a radically different method that does not cause any of the listed issues.",
        heading2: "Use The Browser Settings In Internet Explorer 11 To Disable Ads",
        steps1: ["Step First: Ensure you are using the most recent version of Internet Explorer. <br/> Make sure you have the most recent version of Microsoft Internet Explorer, which contains the most recent security fixes, by updating it. To look for updates: <br/> <br/> Select 'Windows Update' after selecting 'Safety.' <br/> <br/>  Then, select the 'Check for updates' link. <br/> <br/> Be aware that some Internet Explorer upgrades might require a system reboot.", "go to the Internet Explorer settings. <br/> <br/> Choose 'Internet options' by clicking the 'Tools' icon, then click the 'Privacy' tab.",
            "activate the pop-up blocker. <br/> <br/> Click the 'Settings' button after selecting the 'Turn on Pop-up Blocker' option under the 'Privacy' tab.",
            "Turn on automatic pop-up blocking. <br/> <br/> Click the Blocking Level drop-down menu under 'Settings' and choose 'Medium: Block most automatic pop-ups.' In most cases, 'Medium' level blocking is sufficient, while 'High - Block all pop-ups' is an option. Following the steps, you can easily install the Adblock extension for Internet Explorer. <br/> <br/>  Be aware that pop-ups will be blocked entirely on the 'High' blocking level. You'll need to specify the website as 'allowed' or hit the 'Ctrl+Alt' shortcut to allow a pop-up window on the page since some websites require pop-ups to function correctly. <br/> <br/> Once the blocking level has been selected, click 'Close' and 'OK.' That's how to turn off pop-ups in Internet Explorer 11."],
        heading3: "Internet Explore Ad Prevention with TrueAdblocker",
        text3: "We advise you to download and set up our ad-blocking tool, TrueAdblocker. In contrast to TrueAdblocker Plus for Internet Explorer, our ad blocker operates on a system-wide level, instantly 'turning off' advertising in all browsers. <br/> <br/>The limits of the browser have no bearing on TrueAdblocker's functionality. An extensive anti-ad application that functions flawlessly across all browsers. TrueAdblocker begins intricately screening your Internet traffic after a quick installation:",
        steps2: ["The 'TrueAdblocker' application module blocks all ad formats. Indeed, TrueAdblocker eliminates all forms of online advertising, including pop-ups, banners, and video adverts—moreover, social widgets (such as 'Like' and 'Retweet' buttons, among others).",
            "Our program includes other elements that will guarantee the safe use of the Internet and filtering, including the TrueAdblocker. Antiphishing software offers protection from dangerous and phishing websites.",
            "Parental Control controls content screening and concealing websites and items unsuitable for young children."],
        text4: "Enjoy a safe and clean internet by removing pop-ups and advertisements from Internet Explorer with TrueAdblocker. On our official website, you can download TrueAdblocker for free to eliminate advertisements in Internet Explorer.",
        heading5: "Frequently Asked Questions",
        faq: [
            {
                question: "Why should I turn off Internet Explorer's ads?",
                answer: "By lowering distractions, eliminating possible security threats, and speeding up page loads, blocking adverts can enhance your online experience."

            },
            {
                question: "How can I stop Internet Explorer advertisements?",
                answer: "Installing ad-blocking extensions or using Internet Explorer's built-in tracking protection feature are two ways to block advertisements."

            },
            {
                question: "Is it possible to utilize multiple ad-blocking extensions with Internet Explorer?",
                answer: "It is possible to utilize more than one ad-blocking extension with Internet Explorer. On the other hand, an excessive number of extensions may cause compatibility problems and slow your surfing speed."

            }
        ]
    }

    return (
        <div className={styles.blogs}>
            <Navbar />
            <div className={styles.container}>
                <Image src="/AdblockextensionforInternetExplorer.png" width={400} height={500} className={styles.blogImage} alt={data.alt} />
                <div className={styles.text}>
                    <h1>{data?.heading}</h1>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.intro}</span>` }}></p>
                    <h2>{data?.heading1}</h2>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.text1}</span>` }}></p>
                    <ul>
                        <li>{data?.list.item1}</li>
                        <li>{data?.list.item2}</li>
                        <li>{data?.list.item3}</li>
                    </ul>
                    <p>
                        {data?.subtext}
                    </p>
                    <h2>{data?.heading2}</h2>
                    {
                        data?.steps1.map((step, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: `<span><b>Step ${index + 1} :</b>  ${step}</span>` }} />
                        ))
                    }
                    <h3>{data?.heading3}</h3>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.text3}</span>` }}></p>
                    <ul>
                        {data?.steps2.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.text4}</span>` }}></p>
                    <h3>{data?.heading5}</h3>
                    {
                        data?.faq.map((item, index) => (
                            <div key={index}>
                                <p style={{ fontWeight: "500", fontSize: "2rem" }}>{index + 1}. {item.question}</p>
                                <p>{item.answer}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Blog_2;