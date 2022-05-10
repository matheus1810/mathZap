import { ImageIconContainer } from "../nav/styled"
import { Container, IconsContainer, Name } from "./styled"

export const Header = () => {
    const url = "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80"
    return (
        <Container>
            <div>
            <ImageIconContainer>

                <ImageIconContainer>
                    <img src={url} />
                </ImageIconContainer>
            </ImageIconContainer>


            <Name>
                matheus
            </Name>
            </div>
            
            <IconsContainer>
                <i className='bx bx-search-alt-2'></i>
                <i className='bx bx-list-ul'></i>
            </IconsContainer>
        </Container>
    )
}