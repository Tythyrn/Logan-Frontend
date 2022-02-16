import { gql } from 'graphql-request'

export const GetNavigation = gql`
  query {
    navigation(where: {id: "ckz5xo800ckxa0d78uun1u4va"}) {
      links,
      id
    }
  }
`