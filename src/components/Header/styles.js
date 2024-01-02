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
        
         
     }


    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
          gap: 5.4rem;
          justify-content: center;

    }
    
    `

export const Search = styled.div`
    width: 48.0rem;
    margin-top: 1rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          display: none;

     }

     @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 28.0rem;

     }

`

export const Logo = styled.div`
        width: 19.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        font-size: 1.2rem;
        font-weight: 700;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        

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