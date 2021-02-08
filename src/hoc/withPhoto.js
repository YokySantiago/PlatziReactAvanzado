
import { gql } from 'apollo-boost'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id: ID!) {
  photo(id: $id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const withPhoto = GET_SINGLE_PHOTO
