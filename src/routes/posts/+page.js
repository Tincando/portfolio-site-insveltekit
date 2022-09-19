import { client } from '$lib/graphql-client'
import { postsQuery } from '$lib/graphql-queries'

export const load = async (data) => {
    const { posts } = await client.request(postsQuery)

    return {
      posts
    }
  }