import { gql } from 'graphql-request'

export const GetCaseStudies = gql`
  query ($slug: String){
    caseStudies (where: {slug: $slug}) {
      id,
      title,
      overview {
        html
      },
      deliverables {
        html
      },
      descriptors {
        html
      },
      projects {
        id,
        title,
        imageSet {
          id,
          url,
          width,
          height,
          alt
        }
      },
      heroImage {
        id,
        url,
        width,
        height,
        alt
      },
      metaDescription,
      metaTitle,
      slug
    }
  }
`