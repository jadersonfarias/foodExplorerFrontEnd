import { Container } from "./styles"
import LogoExplorer from "../../assets/logoExplorer.svg";

export function Logo(){
    return(
        <Container>
             <img src={LogoExplorer} alt="logo" />
             <h1>Food Explorer</h1>
        </Container>
    )
}