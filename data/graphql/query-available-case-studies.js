import { gql } from 'graphql-request'

export const GetAvailableCaseStudies = gql`
  query {
    caseStudies {
      id,
      slug
    }
  }
`