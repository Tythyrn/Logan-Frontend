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
          handle,
          caption,
          id,
          url,
          link,
          width,
          height,
          alt
        },
        videos,
      },
      heroImage {
        handle,
        caption,
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