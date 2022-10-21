import styled from 'styled-components'

const HomeStyle = styled.main`
    width: 100%;
    height: 100vh;
    background: ${({theme}) => theme.colors.homeGradient};
`

export default HomeStyle;