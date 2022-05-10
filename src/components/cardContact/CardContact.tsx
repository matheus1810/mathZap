import styled from "styled-components"
import { Container, ImageIconContainer } from "./styled"

export const CardContact = () => {
    const url = "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80"
    return (
        <Container>
            <ImageIconContainer>
                <ImageIconContainer>
                    <img src={url} />
                </ImageIconContainer>
            </ImageIconContainer>

            <div className="name">Name</div>

        </Container >
    )
}