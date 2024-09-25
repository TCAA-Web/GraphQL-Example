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

  console.log(filmID);

  console.log("Data for single film", data);

  return <h1>{data.film.openingCrawl}</h1>;
};
