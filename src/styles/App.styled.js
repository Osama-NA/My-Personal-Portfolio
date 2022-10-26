import styled from 'styled-components'

const AppStyle = styled.main`
    position: relative;
    max-width: 100vw;
    min-width: 100vw;
    color: ${({theme}) => theme.colors.primary};
`

export default AppStyle