import styled from 'styled-components'

const LoadingPageStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;    
    z-index: 60;

    width: 100vw;
    height: 100vh;
    background: ${({theme}) => theme.colors.homeGradient};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo{
        color: ${({theme}) => theme.colors.ternary};
        
        span{
            font-weight: 900;
            color: ${({theme}) => theme.colors.secondary};
        }
    }

    .loading-spinner{
        margin: 2rem;
    }

    @media (max-width: 1100px){
        .loading-spinner{
            margin: 1.75rem;
        }
    }

    @media (max-width: 769px){
        .loading-spinner{
            margin: 1.5rem;
        }
    }
`

export default LoadingPageStyle