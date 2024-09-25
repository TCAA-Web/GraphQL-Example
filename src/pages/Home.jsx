import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "graphql-request";
import { allFilms } from "../queries/allFilms";
import { Link } from "react-router-dom";

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
      {data.allFilms.films.map((item) => {
        return (
          <Link to={`search/${item.id}`} key={item.title}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
