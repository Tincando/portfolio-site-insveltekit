
import { gql } from 'graphql-request';
import { client } from '$lib/graphql-client';
import ProjectCard from '$lib/components/project-card.svelte'
import { authorsQuery, projectsQuery } from '$lib/graphql-queries'


  export async function load (data) {
    
    

    const [authorReq, projectsReq] = await Promise.all([
        client.request(authorsQuery),
        client.request(projectsQuery),
      ])

    const { authors } = authorReq
    const { projects } = projectsReq

    return {
        projects,
        authors,
    }
  }




