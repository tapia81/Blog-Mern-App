import Nav from "./Nav"
import Footer from "./Footer"

const Layout = (props) => {
    return (
        <div>
            <h1>✨ Blogs App ✨</h1>
            <Nav/>
            {props.children}
            <Footer/>
        </div>
    )
}
export default Layout