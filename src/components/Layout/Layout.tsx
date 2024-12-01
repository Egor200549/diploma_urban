import { Outlet } from "react-router"
import Header from "../Header/Header"
import styled from "styled-components"
import Footer from "../Footer/Footer"
import { useState } from "react"
import Basket from "../Basket/Basket"

const StyledMain = styled.main`
    flex: 1 0 auto;
`

const Layout = () => {

    const [openedBasket, setOpenedBasket] = useState<boolean>(false);

    const handleBasket = () => {
        setOpenedBasket((prevState: boolean) => !prevState);
    }

    return (
        <>
            <Header handleBasket={handleBasket} />
            {openedBasket && <Basket />}
            <StyledMain>
                <Outlet />
            </StyledMain>
            <Footer />
        </>
    )
}

export default Layout;