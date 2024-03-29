import styled from"styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"


export const Container = styled.div`
    grid-area: header;
    height: 10.4rem;
    width: 100%;
    padding: 2.4rem 8.0rem;

    .mobile{
      display: none;
    }

    background-color: ${({ theme }) => theme.COLORS.DARK['600']};
    
    display: flex;
    align-items: center;
 
    justify-content: space-between;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) { 
     justify-content:start ;
        gap: 12rem;
         
     }


    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
          gap: 5.4rem;
          justify-content: center;

    }
    
    `

export const Search = styled.div`
    width: 60.0rem;
    margin-top: 1rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          display: none;

     }

     @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 28.0rem;

     }



`

export const HeaderLogo = styled.div`
        max-width: 19.6rem;
        display: flex;
        flex-direction: column;
        align-items: end;
     
    

        p {
          color: ${({theme}) => theme.COLORS.CAKE['100']};
          font-size: 1.4rem;
      
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
           flex-direction: row;
           align-items: center;
           gap: 1rem;

     }     


`

export const LogoImg = styled.div`
      display: flex;
      align-items: center;
      gap: 1rem;

      font-family: Roboto;
      font-size: 1.8rem;
      

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          font-size: 1.4rem;
      }

`

export const Request = styled.div`
        width: 20.6rem;
        display: flex;
        align-items: center;
     
        justify-content: center;
    
        margin-bottom: .8rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          display: none;
     }

     @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 17.0rem;

     }
  

`
export const Logout = styled.button`
     border: none;
     background: none;
     margin-bottom: .5rem;

     @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          display: none;
     }


`

export const Menu = styled.button`
        background:none;
        border: none;
        display: none;
    > svg {
            font-size: 3.8rem;
            color: ${({ theme }) => theme.COLORS.LIGHT['100']}; 
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          display: block;
     }
`

export const  Receipt_mobile = styled.button`
        background:none;
        border: none;
        display: none;
        position: relative;

       > svg {
            font-size: 3.8rem;
            color: ${({ theme }) => theme.COLORS.LIGHT['100']}; 
        }

        > span {
          padding: 0 .4rem;
          position: absolute;

          right: -.4rem;
          top: -.4rem;
          border-radius: 50%;

          color: white;
          background-color: red;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          display: block;
     }


`