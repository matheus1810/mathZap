import { Footer } from "../components/footer/Footer"
import { Header } from "../components/Header/Header"
import { Main } from "../components/main/Main"
import { Nav } from "../components/nav/Nav"
import { Container, GridContainer } from "./styled"

export const HomePage = () => {
    return (
        <Container>
            <Nav/>
            <GridContainer>
                <Header />
                <Main />
                <Footer />
            </GridContainer>
        </Container>
    )
}