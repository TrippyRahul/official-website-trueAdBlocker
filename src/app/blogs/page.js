import Blogs from "../components/Blogs"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "../styles/blogpage.module.scss";

const Page = () => {
    return (
        <div className={styles.blogs}>
            <Navbar />
            <div style={{minHeight: "100vh", margin: "auto"}}>
                <Blogs showbg={false}/>
            </div>
            <Footer />
        </div>
    )
}

export default Page