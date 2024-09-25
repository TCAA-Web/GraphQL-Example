import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "graphql-request";
import { allFilms } from "../queries/allFilms";
import { Link } from "react-router-dom";
import { StyledLink } from "../components/StyledLink/StyledLink";

export const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allFilms"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilms
      ),
  });

  console.log(data);

  if (isLoading) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data.allFilms.films.map((item) => {
          return (
            <li key={item.title}>
              <StyledLink link={`search/${item.id}`} title={item.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
