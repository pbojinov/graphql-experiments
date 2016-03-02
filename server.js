import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './data/schema';

const app = express();
const PORT = 1234;

app.use('/GraphQL', GraphQLHTTP({
  schema,
  grahpiql: true
}));

app.listen(PORT, () => {
  console.log(`GraphQL server running. Listening on port ${PORT}`);
});
