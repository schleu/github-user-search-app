import { api } from "./api";

export const getUsers = async (username: string) => {
  const { data } = await api.get(`users/${username}`);

  const createdAt = new Date(data.created_at);
  const formattedCreatedAt = createdAt
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(",", "");

  const response = {
    ...data,
    formattedCreatedAt,
  };

  return response;
};
