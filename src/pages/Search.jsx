import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import React from "react";
import { useParams } from "react-router-dom";
import { singleFilm } from "../queries/singleFilm";

export const Search = () => {
  const { filmID } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleFilm"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        singleFilm,
        { filmId: filmID }
      ),
  });

  if (isLoading) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section>
      <h5>{data.film.title}</h5>
      <p>{data.film.openingCrawl}</p>
    </section>
  );
};
