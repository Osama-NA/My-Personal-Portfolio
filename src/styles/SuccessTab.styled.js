import styled from "styled-components";
import { darkTheme } from "../utils/themes";

const SuccessTabStyle = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.tab_background};
    color: ${darkTheme.colors.primary2};
    
    .close-overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
    }

    .message-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 60px;
        background-color: ${darkTheme.colors.primary};
        border-radius: 17.5px;
        z-index: 1;

        p{
            font-weight: 600;
            padding: 0 2rem;
        }
        .close-btn{
            cursor: pointer;
            display: grid;
            place-items: center;
            height: 100%;
            width: 60px;
            background-color: ${({ theme }) => theme.colors.secondary};
            border-radius: 17.5px;

            svg{
                color: ${darkTheme.colors.primary};
                font-size: 22px;
            }
        }
    }

    @media (max-width: 1100px){
        .message-container{
            height: 55px;
            border-radius: 15px;
    
            p{
                padding: 0 1.75rem;
            }
            .close-btn{
                width: 55px;
                border-radius: 15px;
    
                svg{
                    font-size: 20px;
                }
            }
        }
    }

    @media (max-width: 769px){
        .message-container{
            height: 45px;
            border-radius: 12.5px;
    
            p{
                padding: 0 1.5rem;
            }
            .close-btn{
                width: 45px;
                border-radius: 12.5px;
    
                svg{
                    font-size: 18px;
                }
            }
        }
    }
`

export default SuccessTabStyle