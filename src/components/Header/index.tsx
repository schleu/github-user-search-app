import { useState } from "react";
import styled from "styled-components";
import { MoonIcon } from "../../assets/icons/icon-moon";
import { SunIcon } from "../../assets/icons/icon-sun";

interface Props {
  toogleTheme(): void;
}

export const Header: React.FC<Props> = ({ toogleTheme }) => {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
    toogleTheme();
  };

  return (
    <Container>
      <Title>devfinder</Title>
      <div onClick={() => handleTheme()}>
        <Theme>
          {theme ? (
            <>
              DARK
              <MoonIcon />
            </>
          ) : (
            <>
              LIGHT
              <SunIcon />
            </>
          )}
        </Theme>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 730px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  margin-top: 144px;
`;

const Theme = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${(props) => props.theme.colors.text.h3};

  &:hover {
    color: ${(props) => props.theme.colors.text.h1};
  }
`;

const Title = styled.p`
  font-weight: bold;
`;
