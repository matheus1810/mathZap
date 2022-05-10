import { CardContact } from "../cardContact/CardContact"
import { CardContainer, Container, FormContainer, IconsContainer, ImageIconContainer, Section } from "./styled"

export const Nav = () => {
    return (
        <Container>
            <Section>

                <ImageIconContainer>
                    <img src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80" />
                </ImageIconContainer>

                <IconsContainer>

                    <i className='bx bxs-doughnut-chart'></i>
                    <i className='bx bx-message-detail'></i>
                    <i className='bx bx-list-ul'></i>

                </IconsContainer>
            </Section>
            <FormContainer>
               <form>
                   <input placeholder="pesquisar ou iniciar nova conversa"/>
               </form>
            </FormContainer>
            <CardContainer>
            <CardContact/>
            <CardContact/>
            <CardContact/>
         
      
            </CardContainer>
        </Container>
    )
}