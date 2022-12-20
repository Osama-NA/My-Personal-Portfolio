import styled from 'styled-components'

const ProjectsStyle = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 8rem 6rem;
    background: ${({theme}) => theme.colors.ternary2};

    .container{ 
        max-width: 1400px;
        width: 100%;
    }
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .search-container{
            display: flex;
            align-items: center;
            width: 400px;
            height: 60px;
            border-radius: 17.5px;
            padding: 0 1.8rem 0 0;
            border: 2px solid ${({theme}) => theme.colors.primary};

            input{
                padding: 1rem 0 1rem;
                padding-right: .65rem;
                padding-left: 1.8rem;
                width: 100%;
                font-weight: ${({theme}) => theme.fonts.weight.mid};
            }
            input::placeholder{
                font-weight: ${({theme}) => theme.fonts.weight.light};
            }

            svg{
                font-size: 18px;
                margin-left: 1rem;
                color: ${({theme}) => theme.colors.secondary};
            }
        }
    }

    .projects{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: stretch;
        padding-top: 4rem;
        gap: 1.5rem;

        .note{
            font-weight: ${({theme}) => theme.fonts.weight.mid};
            span{
                font-weight: ${({theme}) => theme.fonts.weight.bold};
                color: ${({theme}) => theme.colors.secondary};
            }
        }
        .project{
            position: relative;
            display: grid;
            place-items: center;
            width: 450px;
            min-height: 300px;
            box-shadow: 0 12.5px 30px -9px rgb(5 29 43 / 17.5%);
            border-radius: 25px;
            border: 2px solid  ${({theme}) => theme.colors.primary};
            background-color: ${({theme}) => theme.colors.project_background};
            transition: all .25s ease;
            overflow: hidden;

            .project-info{
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: 1.5rem 2rem 1.8rem;
                justify-content: flex-start;
                opacity: 0;
                transition: all .3s ease;
                overflow: hidden;
                transform: scale(0.5);

                .title{
                    font-size: 20px;
                    line-height: 28px;
                    font-weight: ${({theme}) => theme.fonts.weight.bold};
                }
                .description{
                    font-weight: ${({theme}) => theme.fonts.weight.light};
                    padding: .75rem 0 .5rem;
                }
                .tech{
                    font-size: 16px;
                    line-height: 24px;
                    font-weight: ${({theme}) => theme.fonts.weight.mid};
                }

                .buttons{
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-end;
                }
                .buttons a{
                    padding: .55rem 1.6rem;
                    border-radius: 12.5px;
                    transition: all .1s ease-in;
                }
                .repo{
                    margin-right: 1rem;
                    font-weight: ${({theme}) => theme.fonts.weight.reg};
                    border: 2px solid ${({theme}) => theme.colors.primary};
    
                    &:hover{
                        color: ${({theme}) => theme.colors.secondary};
                        border: 2px solid ${({theme}) => theme.colors.secondary};
                    }
                }
                .demo{
                    color: #F8F8F8;
                    font-weight: ${({theme}) => theme.fonts.weight.filled};
                    border: 2px solid ${({theme}) => theme.colors.secondary};
                    background-color: ${({theme}) => theme.colors.secondary};
    
                    &:hover{
                        background-color: ${({theme}) => theme.colors.primary};
                        border: 2px solid ${({theme}) => theme.colors.primary};
                        color: ${({theme}) => theme.colors.primary2};
                    }
                }
            }

            img{
                opacity: 1;
                width: 82.5%;
                transition: all .25s ease;
            }

            &:hover{
                background-color: transparent;

                .project-info{
                    opacity: 1;
                    transform: scale(1);
                }
                img{
                    opacity: 0;
                    transform: scale(0.5);
                }
            }
        }
    }

    @media (max-width: 1600px){
        .projects{
            .project{
                width: 385px;
            }
        }
    }

    @media (max-width: 1399px){
        .projects{
            gap: 1.5vw;

            .project{
                width: 26.5vw;
                min-height: 370px;
            }
        }
    }

    @media (max-width: 1100px){
        padding: 6rem 4rem;
    
        header{
            .search-container{
                width: 350px;
                height: 55px;
                border-radius: 15px;
                padding: 0 1.6rem 0 0;
    
                input{
                    padding-left: 1.6rem;
                }
    
                svg{
                    font-size: 16px;
                }
            }
        }
    
        .projects{
            padding-top: 2.75rem;
            gap: 1.5rem;
    
            .project{
                width: 48%;
                min-height: 285px;
                box-shadow: 0 12.5px 30px -9px rgb(5 29 43 / 15%);
                border-radius: 22.5px;
    
                .project-info{
                    padding: 1.25rem 1.75rem 1.65rem;
    
                    .title{
                        font-size: 18px;
                        line-height: 26px;
                    }
                    .description{
                        padding: .6rem 0 .35rem;
                    }
                    .tech{
                        font-size: 14px;
                        line-height: 22px;
                    }
    
                    .buttons a{
                        padding: .45rem 1.5rem;
                        border-radius: 10px;
                    }
                    .repo{
                        margin-right: .75rem;
                    }
                }
            }
        }
    }

    @media (max-width: 769px){
        padding: 4rem 2rem;
    
        header{
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            h1{
                margin-bottom: 1.5rem;
            }
            .search-container{
                width: 100%;
                height: 50px;
                border-radius: 12.5px;
                padding: 0 1.4rem 0 0;
    
                input{
                    padding-left: 1.4rem;
                }
    
                svg{
                    font-size: 14px;
                }
            }
        }
    
        .projects{
            padding-top: 2.25rem;
            gap: 1.25rem;
    
            .project{
                width: 100%;
                min-height: 0;
                height: 240px;
                box-shadow: 0 12.5px 30px -9px rgb(5 29 43 / 12.5%);
                border-radius: 20px;
    
                .project-info{
                    padding: 1.1rem 1.6rem 1.5rem;
    
                    .title{
                        font-size: 16px;
                        line-height: 26px;
                    }
                    .description{
                        padding: .45rem 0 .35rem;
                    }
                    .tech{
                        font-size: 12px;
                        line-height: 20px;
                    }
    
                    .buttons a{
                        padding: .3rem 1.15rem;
                        border-radius: 7.5px;
                    }
                    .repo{
                        margin-right: .6rem;
                    }
                }

                img{
                    // width: %;
                    max-width: 290px;
                }
            }
        }
    }

    @media (min-width: 575px) and (max-width: 768px){
        .projects{
            .project{
                width: 48%;
                height: 295px;
            }
        }
    }

    @media (min-width: 425px) and (max-width: 574px){
        .projects{
            .project{
                height: 225px;
            }
        }
    }

    @media (max-width: 375px){
        .projects{
            .project{
                height: 265px;
            }
        }
    }
`

export default ProjectsStyle