import styled from "styled-components";

const ContactStyle = styled.section`
    position: relative;
    width: 100%;
    padding 0 6rem 8rem;
    background: ${({ theme }) => theme.colors.ternary2};

    h1{
        width: 100%;
    }

    .content{
        display: flex;
        align-items: flex-end;
        padding-top: 4rem;
        // justify-content: space-evenly;

        form{
            width: 550px;

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
                font-weight: ${({theme}) => theme.fonts.weight.filled};
                background-color: ${({ theme }) => theme.colors.secondary};
            }
        }
    }
`;

export default ContactStyle;
