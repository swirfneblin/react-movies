import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
  <section>
    <ul>
      {movies.map((m, index) => (
        <MovieItem key={index} movie={m} />
      ))}
    </ul>
  </section>
);
