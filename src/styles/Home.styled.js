import styled from 'styled-components'

const HomeStyle = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 1.5rem 6rem;
    background: ${({theme}) => theme.colors.homeGradient};

    .container{
        width: 100%;
        max-width: 1400px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    main{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        section{
            h1{ 
                font-size: 32px;
            }
            p{
                font-weight: ${({theme}) => theme.fonts.weight.light};
                margin: 1rem 0 1.5rem;
                max-width: 33ch;

                span{
                    color: ${({theme}) => theme.colors.secondary};
                }
            }
            button{
                padding: .55rem 1.6rem;
                border-radius: 12.5px;
                transition: all .1s ease-in;
            }
            .bordered-btn{
                margin-right: 1rem;
                font-weight: ${({theme}) => theme.fonts.weight.reg};
                border: 2px solid ${({theme}) => theme.colors.primary};

                &:hover{
                    color: ${({theme}) => theme.colors.secondary};
                    border: 2px solid ${({theme}) => theme.colors.secondary};
                }
            }
            .filled-btn{
                color: #F8F8F8;
                font-weight: ${({theme}) => theme.fonts.weight.filled};
                border: 2px solid ${({theme}) => theme.colors.secondary};
                background-color: ${({theme}) => theme.colors.secondary};

                &:hover{
                    background-color: ${({theme}) => theme.colors.primary};
                    border: 2px solid ${({theme}) => theme.colors.primary};
                    color: ${({theme}) => theme.colors.secondary};
                }
            }
        }

        .home-img{
            position: relative;
            top: .8rem;
        }
    }

    footer{
        position: relative;
        top: -0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }

    @media (max-width: 1250px){
        main{
            align-items: flex-end;
            
            .home-img{
                top: .9rem;
                width: 33vw;
                height: auto;
            }
        }
    }

    @media (max-width: 1100px){
        padding: 1.25rem 4rem;

        main{
            section{
                h1{ 
                    font-size: 28px;
                }
                p{
                    margin: .75rem 0 1.25rem;
                    max-width: 33ch;
                }
                button{
                    padding: .45rem 1.5rem;
                    border-radius: 10px;
                }
                .bordered-btn{
                    margin-right: 1rem;
                    border: 2px solid ${({theme}) => theme.colors.primary};
    
                    &:hover{
                        border: 2px solid ${({theme}) => theme.colors.secondary};
                    }
                }
                .filled-btn{
                    border: 2px solid ${({theme}) => theme.colors.secondary};
    
                    &:hover{
                        border: 2px solid ${({theme}) => theme.colors.primary};
                    }
                }
            }
    
            .home-img{
                top: .7rem;
                width: 30vw;
            }
        }
    
        footer{
            top: -0.75rem;
        }
    }

    @media (max-width: 850px){
        main{
            .home-img{
                display: none;
            }
        }
    }

    @media (max-width: 769px){
        padding: 1rem 2rem;
    
        main{
            section{
                h1{ 
                    font-size: 24px;
                }
                p{
                    margin: .5rem 0 1rem;
                    max-width: 35ch;
                }
                button{
                    padding: .3rem 1.15rem;
                    border-radius: 10px;
                }
                .bordered-btn{
                    margin-right: .6rem;
                    margin-bottom: .6rem;
                }
            }
        }
    
        footer{
            top: -1rem;
        }
    }
`

export default HomeStyle;