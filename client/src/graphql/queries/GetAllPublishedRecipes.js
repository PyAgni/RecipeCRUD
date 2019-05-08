//Query to fetch all recipies

import { gql } from 'apollo-boost';

export default gql`query GetAllPublishedRecipes {
  recipies(where: {published: true}){
    id
    createdAt
    title
    ingredients
    directions
    published
  }
}`;
