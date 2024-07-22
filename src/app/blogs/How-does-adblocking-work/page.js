import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import styles from "../../styles/blogpage.module.scss";

export const metadata = {
    title: "How does ad blocking work?",
    description:
        "The article discusses how and why you should add a Trueadblocker extension for Internet Explorer and mentions the steps to add the extension"
};

const Blog_1 = () => {
    const data = {
        alt: "What is an ad blocker",
        heading: "How does ad blocking work?",
        intro: "Ad blocking stops advertisements from loading on any website you visit. Ads of any kind, anyplace. Ad blockers are not only magic, unlike what some people may think. Adblocking entails using filter lists, intercepting server communications, and other activities akin to a secret agent's. <br/> <br/> As advertisements cover every inch of our online space and integrate seamlessly into the internet ecosystem, increasing numbers of users resort to premium ad blockers to eliminate intrusive, overpowering, and occasionally even dangerous advertisements.",
        heading1: "What is an ad blocker?",
        text1: "An application that recognizes and blocks advertisements on websites and applications you use is known as an ad blocker. Ads are prevented from loading by an ad blocker, which interferes with and blocks website contact with ad servers. <br/> <br/> <a href='/' class='text-blue-300'>Adblocking systems</a> can be installed as system-wide external apps, browser plugins, or extensions. On the other hand, PC users are more likely to utilize browser plugins and extensions than mobile devices like phones or tablets. Before installing the application, it is always recommended to read the instructions carefully to avoid complications.",
        heading2: "How does ad blocking work?",
        text2: {
            intro: "Each ad-blocking application works differently, but most of them have the same features and functions. Here, we have mentioned some of the top ways and features and explained how an ad-blocking application works.",
            heading1: "Filter Configuration",
            text1: "Depending on the website and your search history, you get advertisements. Our adblocking application has a filter to filter out which advertisement you want to see or not. Some of them are:",
            list: {
                item1: "Standard filter: a language-specific standard filter. It could be English, German, Spanish, or another language, depending on the language on your computer.",
                item2: "User filter: an ad filter that you can manually fill up",
                item3: "The most comprehensive collection of online trackers is found in the spyware filter. Subscribe to this filter if you don't want to be tracked when you browse the internet."
            }
        },
        heading3: "Blocking Ads based on URL",
        text3: "Blocking ads by blocking the URL is the easiest method of blocking advertisements. Requests submitted to forbidden addresses are blocked by Trueadblocker, which also provides the browser with an empty answer, effectively preventing requests from being sent. Both traffic and website loading times are decreased. More than fifteen thousand blacklisted addresses are included in the standard filter that comes with Trueadblocker. <br/> <br/> The majority of our rivals employ this blocking technique. Sadly, relying on this tactic is inadequate for effective ad blocking. Thus, we aim to use other effective methods for Adblocking. Keep on reading to learn what they are and how we use them.",
        heading4: "Using CSS to block ads",
        text4: "CSS is a specialized language used to format and decorate web Ps. Rules can be used to establish the style of page elements. Parameters like colors, typefaces, element placement, and even visibility can be included in styles. And since we wish to conceal banners, that is just what we require. <br/> <br/> Trueadblocker adds its own rules to web pages to leverage this approach. The table has many filtration rules that can conceal different sorts of banners. <br/> <br/> What about the economy of traffic? Don't worry, if a banner is hidden using CSS, none of the current browsers will ever begin downloading it. <br/> <br/> An application might function as a decent ad blocker if it adheres to ad-blocking techniques. Is it, however, sufficient for genuinely effective ad blocking? It isn't. The issue with partially downloaded photos is still unresolved by these techniques. Additionally, there is still the issue of tricky ad networks that utilize scripts to dynamically push banners to users' browsers after loading the page. Lastly, some websites employ unique scripts to prohibit users from using the Adblocking application on their computers and prevent them from accessing their material. <br/> <br/> Now, let's examine the following blocking technique.",
        heading5: "HTML code filtering",
        text5: "The following method alters a webpage's code before being returned to the browser. Not all ad blockers produced as browser plug-ins can use this strategy. Trueadblocker can perform tasks that other programs cannot since it is a stand-alone program that works with all popular browsers. <br/> <br/> Initially, it allowed us to entirely delete scripts, links, and images loaded on our banned list from IP addresses. The browser won't try to load these elements because it won't even know they were there. <br/> <br/> We can analyze web page elements with greater freedom and even remove things that are generally impossible to remove with CSS approaches. These are usually different scripts that cannot be turned off in any other way. <br/> <br/> One typical example of a website demonstrating the value of this kind of study uses custom scripts to block ad blockers. If you use an ad blocker, these scripts prevent you from accessing the website. You'll have to either block the website or disable your ad-blocking software if your only option is to use an HTML content filtration solution. <br/> <br/> Say goodbye to those annoying advertisements by downloading our application, Trueadblocker, and enjoy browsing the internet without any external intervention."
    }

    return (
        <div className={styles.blogs}>
            <Navbar />
            <div className={styles.container}>
                <Image src={`/Howdoesadblockingwork.png`} width={400} height={500} className={styles.blogImage} alt={data.alt} />

                <div className={styles.text}>
                    <h1>{data?.heading}</h1>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.intro}</span>` }}></p>
                    <h3>{data?.heading1}</h3>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.text1}</span>` }}></p>
                    <h3>{data?.heading2}</h3>
                    <p>{data?.text2.intro}</p>
                    <h4>{data?.text2.heading1}</h4>
                    <p>{data?.text2.text1}</p>
                    <ul>
                        <li>{data?.text2.list.item1}</li>
                        <li>{data?.text2.list.item2}</li>
                        <li>{data?.text2.list.item3}</li>
                    </ul>
                    <h3>{data?.heading3}</h3>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.text3}</span>` }}></p>
                    <h3>{data?.heading4}</h3>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.text4}</span>` }}></p>
                    <h3>{data?.heading5}</h3>
                    <p dangerouslySetInnerHTML={{ __html: `<span>${data?.text5}</span>` }}></p>
                </div>
            </div>
            <Footer Footerdata={{footerBackground:'/usage1.png'}}/>
        </div>
    )
}

export default Blog_1;
