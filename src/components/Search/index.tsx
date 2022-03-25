import styled from "styled-components";
import { SearchIcon } from "../../assets/icons/icon-search";

interface iSearch {
  onChange: (e: string) => void;
}

export const Search = ({ onChange }: iSearch) => {
  return (
    <Container>
      <SearchBox>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search GitHub username…"
          onChange={(e) => onChange(e.target.value)}
        />
      </SearchBox>
      <ErrorMessage>No results</ErrorMessage>
      <Button>Search</Button>
    </Container>
  );
};

const Container = styled.div`
  height: 69px;
  width: 730px;
  border-radius: 0px;
  background: ${(props) => props.theme.colors.background.card};

  box-shadow: 0px 16px 30px -10px #4660bb32;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 9.5px;
`;

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;

  input {
    width: 100%;
    height: 100%;
    font-size: 18px;
    line-height: 25px;
    padding: 22px 0;
    border: none;
    cursor: pointer;
    background: transparent;
    color: ${(props) => props.theme.colors.text.input};
  }
`;

const ErrorMessage = styled.div`
  width: 112px;
  color: ${(props) => props.theme.colors.text.error};
  font-size: 15px;
  font-weight: 700;
  margin-right: 24px;
`;

const Button = styled.div`
  width: 106px;
  height: 50px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background.button};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    background: ${(props) => props.theme.colors.background.buttonHover};
    transition: 1s;
  }
`;
