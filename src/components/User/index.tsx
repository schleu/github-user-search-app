import styled from "styled-components";
import { OfficeBuildindIcon } from "./icons/office-building";
import { PinIcon } from "./icons/pinIcon";
import { TwitterIcon } from "./icons/twitterIcon";
import { UrlIcon } from "./icons/urlIcon";

export interface iUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  blog: string | null;
  created_at: string;
  formattedCreatedAt: string;
  location: string;
  twitter_username: string | null;
  company: string;
  followers: number;
  following: number;
  public_repos: number;
}
interface iProps {
  user: iUser;
}
export const User = ({ user }: iProps) => {
  return (
    <Container>
      <Image>
        <img src={user.avatar_url} alt="" />
      </Image>
      <Data>
        <UserName>
          <h1>{user.name}</h1>
          <h2>Joined {user.formattedCreatedAt}</h2>
        </UserName>
        <UserLogin>@{user.login}</UserLogin>
        <Bio>{user.bio || "This profile has no bio"}</Bio>
        <Numbers>
          <div>
            Repos <span>{user.public_repos}</span>
          </div>
          <div>
            Followers <span>{user.followers}</span>
          </div>
          <div>
            Following <span>{user.following}</span>
          </div>
        </Numbers>
        <OthersInfos>
          <OthersInfosItem>
            <OfficeBuildindIcon />
            {user.company || "Not Available"}
          </OthersInfosItem>
          <OthersInfosItem>
            <UrlIcon />
            {user.blog || "Not Available"}
          </OthersInfosItem>
          <OthersInfosItem>
            <TwitterIcon />
            {user.twitter_username || "Not Available"}
          </OthersInfosItem>
          <OthersInfosItem>
            <PinIcon />
            {user.location || "Not Available"}
          </OthersInfosItem>
        </OthersInfos>
      </Data>
    </Container>
  );
};
const Container = styled.div`
  width: 730px;
  background: ${(props) => props.theme.colors.background.card};
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  padding: 48px;
  display: flex;
  gap: 37px;
  margin-top: 24px;
`;

const UserName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h1 {
    color: ${(props) => props.theme.colors.text.h1};
    font-size: 15px;
  }
  h2 {
    color: ${(props) => props.theme.colors.text.h2};
    font-size: 15px;
    font-weight: 400;
  }
`;
const UserLogin = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.text.h3};
  font-size: 16px;
  line-height: 24px;
`;

const Image = styled.div`
  width: 117px;
  height: 117px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Data = styled.div`
  width: calc(100% - 117px);
`;

const Bio = styled.div`
  width: 100%;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 32px;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.text.h4};
`;

const Numbers = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  font-size: 15px;
  line-height: 25px;
  padding: 15px 0 12px 32px;
  background: ${(props) => props.theme.colors.background.body};
  color: ${(props) => props.theme.colors.text.h4};
  border-radius: 10px;
  gap: 82px;
  margin-bottom: 37px;

  div {
    display: flex;
    flex-direction: column;
    font-size: 13px;

    span {
      color: ${(props) => props.theme.colors.black};
      font-size: 22px;
      font-weight: 700;
    }
  }
`;

const OthersInfos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
`;

const OthersInfosItem = styled.div`
  width: calc(50% - 17px);
  display: flex;
  gap: 20px;
  cursor: pointer;
`;
