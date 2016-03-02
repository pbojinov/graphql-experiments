import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './data/schema';

const app = express();
const PORT = 8888;

app.use('/GraphQL', GraphQLHTTP({
  schema,
  grahpiql: true
}));

app.listen(PORT, () => {
  console.log(`Node/express server for graphql app. Listening on port ${PORT}`);
});
