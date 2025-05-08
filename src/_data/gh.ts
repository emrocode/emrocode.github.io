import { gql, GraphQLClient } from "npm:graphql-request";

const excludedIds = ["R_kgDOOG9SeQ", "R_kgDOLRkRAA"];

const query = gql`
  query {
    viewer {
      repositories(first: 100, isFork: false) {
        edges {
          node {
            id
            created_at: createdAt
            is_archived: isArchived
            is_private: isPrivate
            name
            description
            url
            html_url: homepageUrl
            stargazer_count: stargazerCount
            repositoryTopics(first: 4){
              edges {
                node {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const endpoint = Deno.env.get("GH_ENDPOINT");
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${Deno.env.get("GH_TOKEN")}`,
  },
});
const data = await client.request(query);
const repos = data.viewer.repositories.edges.map((e: { node: any }) => e.node);
const reposToShow = repos
  .filter((repo: { id: string }) => !excludedIds.includes(repo.id))
  .map(
    (repo: {
      repositoryTopics: { edges: { node: { topic: { name: string } } }[] };
    }) => ({
      ...repo,
      topics:
        repo.repositoryTopics?.edges.map(
          (edge: { node: { topic: { name: string } } }) => edge.node.topic.name
        ) || [],
    })
  );

export { reposToShow };
