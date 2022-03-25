import React, { useState } from "react";
import debounce from "lodash.debounce";
import { Header } from "../components/Header";
import styled from "styled-components";
import { Search } from "../components/Search";
import { getUsers } from "../service/user";
import { iUser, User } from "../components/User";

interface Props {
  toogleTheme(): void;
}

export const Home = ({ toogleTheme }: Props) => {
  const [user, setUser] = useState<iUser>({
    login: "octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    html_url: "https://github.com/octocat",
    name: "The Octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    bio: null,
    twitter_username: null,
    public_repos: 8,
    followers: 5312,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
    formattedCreatedAt: "",
  });
  const ad1 = {};

  const handleSearch = debounce(async (e: string) => {
    if (e.length) {
      const response = await getUsers(e);
      setUser(response);
    }
  }, 1000);

  return (
    <Container>
      <Header toogleTheme={toogleTheme} />
      <Search onChange={handleSearch} />
      <User user={user} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background.body};
`;
