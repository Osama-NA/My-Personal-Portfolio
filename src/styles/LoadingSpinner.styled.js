import styled from "styled-components";

const LoadingSpinnerStyle = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  img {
    position: absolute;
  }
  .loader-1 {
    width: 32px;
    height: 32px;
    animation: spin 1s linear infinite;
  }
  .loader-2 {
    margin-left: -.5px;
    animation: reversed-spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes reversed-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  @media (max-width: 1100px) {
    .loader-1 {
      width: 28px;
      height: 28px;
    }
    .loader-2 {
      width: 14.5px;
      height: 14.5px;
      margin-bottom: 0.1px;
      margin-left: 0.5px;
    }
  }

  @media (max-width: 769px) {
    .loader-1 {
      width: 25px;
      height: 25px;
    }
    .loader-2 {
      width: 12.5px;
      height: 12.5px;
      margin-bottom: 0.03px;
      margin-left: 0px;
    }
  }
`;

export default LoadingSpinnerStyle;
