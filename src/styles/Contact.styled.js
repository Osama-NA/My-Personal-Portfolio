import styled from "styled-components";
import { darkTheme } from "../utils/themes";

const ContactStyle = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    padding 0 6rem 8rem;
    background: ${({ theme }) => theme.colors.ternary2};

    .container{
        width: 100%;
        max-width: 1400px;

        .ref{
            position: absolute;
            top: -140px;
        }
    }
    h1{
        width: 100%;
    }

    .content{
        display: flex;
        align-items: flex-end;
        padding-top: 3rem;
        justify-content: space-between;

        form{
            min-width: 550px;

            h1{
                font-size: 22px;
                line-height: 30px;
                font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
                margin-bottom: 2rem;

                span{
                    padding-left: .35rem;
                }
            }
            .input-group{
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-bottom: 2rem;
                border: 2px solid ${({ theme }) => theme.colors.primary};
                border-radius: 17.5px;
                // overflow: hidden;
                
                label{
                    position: absolute;
                    top: -11px;
                    left: 22px;
                    padding: 0 .5rem;
                    font-weight: 500;
                    color:  ${({ theme }) => theme.colors.secondary};
                    background-color: ${({ theme }) => theme.colors.ternary2};
                }
                textarea{
                    overflow: hidden;
                    min-height: 250px;
                    // max-height: 175px;
                    resize: none;
                    padding: 1.2rem 1.85rem;
                    font-weight: ${({ theme }) => theme.fonts.weight.mid};
                }
                input{
                    padding: 1.1rem 1.85rem;
                    font-weight: ${({ theme }) => theme.fonts.weight.mid};
                }
                input::placeholder, textarea::placeholder{
                    font-weight: ${({ theme }) => theme.fonts.weight.light};
                }
                textarea::-webkit-scrollbar{
                    width: 3px;
                }
                textarea::-webkit-scrollbar-thumb{
                    border-radius: 3px;
                    background-color: ${({ theme }) => theme.colors.secondary};
                }
            }
            
            button{
                width: 100%;
                text-align: center;
                padding: 1.15rem 2rem;
                border-radius: 17.5px;
                color: ${darkTheme.colors.primary};
                font-weight: ${({theme}) => theme.fonts.weight.filled};
                background-color: ${({ theme }) => theme.colors.secondary};
                transition: all .1s ease-in;

                &:hover{
                    color: ${darkTheme.colors.secondary};
                    background-color: ${({theme}) => theme.colors.primary};
                }
            }
        }

        .side-content{
            width: 47.5%;
            display: flex;
            flex-direction: column;
            align-items: center;

            img{
                position: relative;
                left: -1.5rem;
                width: 360px;
                opacity: 1;
            }
        }
    }

    @media (max-width: 1600px){
        .content{
            .side-content{
                width: 50%;
            }
        }
    }

    @media (max-width: 1400px){
        .content{
            .side-content{
                width: 40%;
            }
        }
    }

    @media (max-width: 1250px){
        .content{
            .side-content{
                width: 35%;
            }
        }
    }

    @media (max-width: 1200px){
        .content{
            .side-content{
                width: 27.5%;
            }
        }
    }

    @media (max-width: 1100px){
        padding: 0 4rem 6rem;
    
        .container{
            .ref{
                top: -15px;
            }
        }
        .content{
            padding-top: 2.25rem;

            form{
                min-width: 450px;
    
                h1{
                    font-size: 20px;
                    line-height: 28px;
                    margin-bottom: 1.5rem;
    
                    span{
                        padding-left: .3rem;
                    }
                }
                .input-group{
                    margin-bottom: 1.75rem;
                    border-radius: 15px;
                    
                    label{
                        top: -11px;
                        left: 22px;
                        padding: 0 .45rem;
                    }
                    textarea{
                        min-height: 225px;
                        padding: 1.05rem 1.7rem;
                    }
                    input{
                        padding: .95rem 1.7rem;
                    }
                }
                
                button{
                    padding: 1rem 2rem;
                    border-radius: 15px;
                }
            }
    
            .side-content{
                width: 40%;
    
                img{
                    left: -1.25rem;
                    width: 280px;
                }
            }
        }
    }

    @media (max-width: 1000px){
        .content{
            .side-content{
                width: 35%;
            }
        }
    }

    @media (max-width: 950px){
        .content{
            .side-content{
                width: 30%;

                img{
                    left: -1rem;
                    width: 240px;
                }
            }
        }
    }

    @media (max-width: 875px){
        h1{
            text-align: center;
        }

        .content{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h1{
                text-align: center;
            }

            .side-content{
                position: relative;
                left: .5rem;
                margin: 6rem 0 2rem;
                width: 100%;

                img{
                    left: -1rem;
                    width: 240px;
                }
            }
        }
    }

    @media (max-width: 769px){
        padding: 2rem 2rem 4rem;
    
        .container{
            .ref{
                top: -45px;
            }
        }
        .content{
            padding-top: 1.75rem;
            form{
                min-width:425px;
    
                h1{
                    font-size: 15px;
                    line-height: 24px;
                    margin-bottom: 1.25rem;
    
                    span{
                        padding-left: .2rem;
                    }
                }
                .input-group{
                    margin-bottom: 1.5rem;
                    border-radius: 12.5px;
                    
                    label{
                        top: -11px;
                        left: 18px;
                    }
                    textarea{
                        min-height: 175px;
                        padding: .9rem 1.5rem;
                    }
                    input{
                        padding: .8rem 1.5rem;
                    }
                }
                
                button{
                    padding: .85rem 2rem;
                    border-radius: 12.5px;
                }
            }
    
            .side-content{
                left: .5rem;
                margin: 4rem 0 2rem;

                img{
                    left: -1rem;
                    width: 240px;
                }
                .socials{
                    li a{
                        font-size: 13px;
                        margin-right: .75rem;
                
                        width: 26px;
                        height: 26px;
                        border-radius: 7.5px;
                    }
                }
            }
        }
    }

    @media (max-width: 550px){
        padding: 2rem 2rem 4rem;
        
        h1{
            text-align: left;
        }
        .container{
            .ref{
                top: -55px;
            }
        }
        .content{
            form{
                min-width: 0;
                width: 100%;
    
                h1{
                    text-align: left;
                }
            }
    
            .side-content{
                img{
                    left: -.75rem;
                    width: 200px;
                }
                .socials{
                    padding-top: .75rem;
                }
            }
        }
    }
`;

export default ContactStyle;
