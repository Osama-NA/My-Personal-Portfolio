import styled from 'styled-components'

const SocialsStyle = styled.ul`
    display: flex;
    flex-direction: row;

    .cv a{
        font-weight: 600;
    }
    li a{
        display: grid;
        place-items: center;

        font-size: 15px;
        margin-right: 1rem;

        width: 30px;
        height: 30px;
        border-radius: 9px;
        transition: all .1s ease-in;
        border: 1px solid ${({theme}) => theme.colors.primary};

        &:hover{
            color: ${({theme}) => theme.colors.secondary};
            border: 1px solid ${({theme}) => theme.colors.secondary};
        }
    }
    
    @media (max-width: 1100px){
        li a{
            font-size: 13px;
            margin-right: .75rem;
    
            width: 26px;
            height: 26px;
            border-radius: 7.5px;
        }
    }
    
    @media (max-width: 769px){
        li a{
            font-size: 11px;
            margin-right: .6rem;
    
            width: 22px;
            height: 22px;
            border-radius: 6px;
        }
    }
`

export default SocialsStyle