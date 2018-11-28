// database에게 query를 어떻게 resolve 할것인지 애기해라
import { getMovies, getById, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score)
  }
};

export default resolvers;

// GraphQL Resolvers는 GraphQL 서버에서 요청을 받음 서버가 Query 나 Mutation의 정의를 발견하면 Resolever을 찾고 해당함수 실행
