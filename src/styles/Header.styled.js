import styled from "styled-components";
import { lightTheme, darkTheme } from "../utils/themes";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  padding: 1.5rem 5rem 1.5rem 6rem;
  width: 100%;

  .container{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // max-width: 1400px;
  }

  .logo {
    font-weight: 700;
    cursor: pointer;

    .dot {
      font-weight: 900;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;

    ul {
      position: relative;
      top: 2px;
      display: flex;
      flex-direction: row;

      li {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
        padding: 0 1rem;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        transition: all 0.1s ease-in;

        &:hover {
          color: ${({ theme }) => theme.colors.secondary} !important;
        }
      }
    }

    .theme-button {
      position: relative;
      cursor: pointer;
      display: grid;
      place-items: center;
      width: 45px;
      height: 45px;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 15px;
      z-index: 0;
      margin-left: 1rem;
      overflow: hidden;
      transition: all 0.2s ease-in;

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.secondary};
        z-index: 1;
        transition: all 0.2s ease-in;
      }

      &::after {
        position: absolute;
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: all 0.2s ease-in;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        border: 2px solid ${({ theme }) => theme.colors.secondary} !important;

        &::after {
          transform: scale(10);
          border-radius: 0px;
        }

        .dot {
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  @keyframes lightButtonBorderFadeIn {
    from {
      border: ${lightTheme.borders.mid};
    }
    to {
      border: ${lightTheme.borders.mid2};
    }
  }

  @keyframes lightButtonBorderFadeOut {
    from {
      border: ${lightTheme.borders.mid2};
    }
    to {
      border: ${lightTheme.borders.mid};
    }
  }

  @keyframes lightTitleColorFadeIn {
    from {
      color: ${lightTheme.colors.ternary};
    }
    to {
      color: ${lightTheme.colors.ternary2};
    }
  }

  @keyframes lightTitleColorFadeOut {
    from {
      color: ${lightTheme.colors.ternary2};
    }
    to {
      color: ${lightTheme.colors.ternary};
    }
  }

  @keyframes lightNavItemColorFadeIn {
    from {
      color: ${lightTheme.colors.primary};
    }
    to {
      color: ${lightTheme.colors.primary2};
    }
  }

  @keyframes lightNavItemColorFadeOut {
    from {
      color: ${lightTheme.colors.primary2};
    }
    to {
      color: ${lightTheme.colors.primary};
    }
  }

  @keyframes lightBackgroundFadeIn {
    from {
      background-color: transparent;
    }
    to {
      background-color: ${lightTheme.colors.ternary};
    }
  }

  @keyframes lightBackgroundFadeOut {
    from {
      background-color: ${lightTheme.colors.ternary};
    }
    to {
      background-color: transparent;
    }
  }

  @keyframes darkButtonBorderFadeIn {
    from {
      border: ${darkTheme.borders.mid};
    }
    to {
      border: ${darkTheme.borders.mid2};
    }
  }

  @keyframes darkButtonBorderFadeOut {
    from {
      border: ${darkTheme.borders.mid2};
    }
    to {
      border: ${darkTheme.borders.mid};
    }
  }

  @keyframes darkTitleColorFadeIn {
    from {
      color: ${darkTheme.colors.primary};
    }
    to {
      color: ${darkTheme.colors.ternary2};
    }
  }

  @keyframes darkTitleColorFadeOut {
    from {
      color: ${darkTheme.colors.ternary2};
    }
    to {
      color: ${darkTheme.colors.primary};
    }
  }

  @keyframes darkNavItemColorFadeIn {
    from {
      color: ${darkTheme.colors.primary};
    }
    to {
      color: ${darkTheme.colors.primary2};
    }
  }

  @keyframes darkNavItemColorFadeOut {
    from {
      color: ${darkTheme.colors.primary2};
    }
    to {
      color: ${darkTheme.colors.primary};
    }
  }

  @keyframes darkBackgroundFadeIn {
    from {
      background-color: transparent;
      box-shadow: 0 12.5px 30px -9px rgb(5 29 43 / 0%);
    }
    to {
      background-color: ${darkTheme.colors.primary};
      box-shadow: 0 12.5px 30px -9px rgb(5 29 43 / 16.5%);
    }
  }

  @keyframes darkBackgroundFadeOut {
    from {
      background-color: ${darkTheme.colors.primary};
      box-shadow: 0 12.5px 30px -9px rgb(5 29 43 / 16.5%);
    }
    to {
      background-color: transparent;
      box-shadow: 0 12.5px 30px -9px rgb(5 29 43 / 0%);
    }
  }

  @media (max-width: 1100px) {
    padding: 1.25rem 3rem 1.25rem 4rem;

    nav {
      ul {
        li {
          padding: 0 0.75rem;
          font-size: 12px;
          line-height: 22px;
        }
      }

      .theme-button {
        width: 40px;
        height: 40px;
        border-radius: 12.5px;
        margin-left: 0.75rem;

        .dot,
        &::after {
          width: 6.8px;
          height: 6.8px;
        }
      }
    }
  }

  @media (max-width: 769px) {
    padding: 1rem 2rem;

    nav {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 10px;
          line-height: 20px;
        }
      }

      .theme-button {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        margin-left: 0.5rem;

        .dot,
        &::after {
          width: 6px;
          height: 6px;
        }
      }
    }
  }
`;

export default HeaderStyle;
