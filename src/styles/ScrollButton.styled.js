import styled from 'styled-components'

const ScrollButtonStyle = styled.button`
    display: grid;
    place-items: center;

    position: relative;
    width: 65px;
    height: 65px;
    border-radius: 20px;
    border: 2px solid ${({theme}) => theme.colors.primary};

    img{
        transition: all .15s ease-out;
    }

    &:hover{
        img{
            transform: translateY(3.5px);
        }
    }
    
    @media (max-width: 1100px){
        width: 55px;
        height: 55px;
        border-radius: 17.5px;
        
        img{
            width: 18px;
        }

        &:hover{
            img{
                transform: translateY(3px);
            }
        }
    }
    
    @media (max-width: 769px){
        width: 45px;
        height: 45px;
        border-radius: 14px;

        img{
            width: 14px;
        }

        &:hover{
            img{
                transform: translateY(2.5px);
            }
        }
    }
`

export default ScrollButtonStyle