
import { gql } from 'graphql-request';
import { client } from '$lib/graphql-client';


  export async function load (data) {
    

    const query = gql`
      query GetProjects {
        projects {
          name
          slug
          description
          demo
          sourceCode
          image {
            url
          }
        }
      }
    `

    const { projects } = await client.request(query)

    return {
        projects,
    }
  }




