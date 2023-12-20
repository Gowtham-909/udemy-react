import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Sale from "./components/Sale Image"
import Offer from "./components/Sale Offer"
import Recomended from "./components/Recomended Section"
import Topics from "./components/Topics"
import Popular from "./components/Popular Section"
import Footer from "./components/Footer"

function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sale></Sale>
            <Offer></Offer>
            <Recomended></Recomended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}


export default App