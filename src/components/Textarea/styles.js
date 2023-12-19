import styled from "styled-components";

export const Container = styled.textarea`
        width: 100%;
        height: 15.0rem;

        background-color: ${({theme}) => theme.COLORS.DARK['800']};
        color: ${({theme}) => theme.COLORS.LIGHT['100']};

        border: none;
        resize: none;
        border-radius: .8rem;

        padding: 1.4rem;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT['500']};
        }
`