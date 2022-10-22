import styled from 'styled-components'

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;

    padding: 1.5rem 6rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .logo{
        cursor: pointer;
        color: ${({theme}) => theme.colors.ternary};
        
        span{
            font-weight: 900;
            color: ${({theme}) => theme.colors.secondary};
        }
    }

    nav{
        display: flex;
        flex-direction: row;
        align-items: center;

        ul{
            position: relative;
            top: 2px;
            display: flex;
            flex-direction: row;

            li{
                cursor: pointer;
                color: ${({theme}) => theme.colors.primary};
                padding: 0 1rem;
                font-size: 14px;
                line-height: 24px;
                font-weight: 400;
                transition: all .1s ease-in;

                &:hover{
                    color: ${({theme}) => theme.colors.secondary};
                }
            }
        }

        .theme-button{
            position: relative;
            cursor: pointer;
            display: grid;
            place-items: center;
            width: 45px;
            height: 45px;
            border: 2px solid ${({theme}) => theme.colors.primary};
            border-radius: 15px;
            z-index: 0;
            margin-left: 1rem;
            overflow: hidden;
            transition: all .2s ease-in;

            .dot{
                width: 8px;
                height: 8px;
                border-radius: 5px;
                background-color: ${({theme}) => theme.colors.secondary};
                z-index: 1;
                transition: all .2s ease-in;
            }

            &::after{
                position: absolute;
                content: '';
                width: 8px;
                height: 8px;
                border-radius: 5px;
                background-color: ${({theme}) => theme.colors.secondary};
                transition: all .2s ease-in;
            }

            &:hover{
                background-color: ${({theme}) => theme.colors.secondary};
                border: 2px solid ${({theme}) => theme.colors.secondary};

                &::after{
                    transform: scale(10);
                    border-radius: 0px;
                }

                .dot{
                    background-color: ${({theme}) => theme.colors.primary};
                }
            }
        }
    }

    @media (max-width: 1100px){
        padding: 1.25rem 4rem;
    
        nav{
            ul{
                li{
                    padding: 0 .75rem;
                    font-size: 12px;
                    line-height: 22px;
                }
            }
    
            .theme-button{
                width: 40px;
                height: 40px;
                border-radius: 12.5px;
                margin-left: .75rem;
    
                .dot, &::after{
                    width: 6.8px;
                    height: 6.8px;
                }
            }
        }
    }

    @media (max-width: 769px){
        padding: 1rem 2rem;
    
        nav{
            ul{
                li{
                    padding: 0 .5rem;
                    font-size: 10px;
                    line-height: 20px;
                }
            }
    
            .theme-button{
                width: 30px;
                height: 30px;
                border-radius: 10px;
                margin-left: .5rem;
    
                .dot, &::after{
                    width: 6px;
                    height: 6px;
                }
            }
        }
    }
`

export default HeaderStyle