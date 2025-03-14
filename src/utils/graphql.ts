const GRAPHQL_API_URL = "http://localhost:4000/graphql";

export async function fetchPosts() {
  const query = `
    query {
      allPosts {
        id
        title
        createdAt
        content
        thumbUrl
        author
        authorPhoto
        authorDescription
      }
    }
  `;

  try {
    const response = await fetch(GRAPHQL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();

    return json?.data?.allPosts ?? [];
  } catch (error) {
    console.error("Err: ", error);
    return [];
  }
}

export async function fetchPostById(id: string) {
  const query = `
      query {
        Post(id: "${id}") {
          id
          title
          createdAt
          content
          thumbUrl
          author
          authorPhoto
          authorDescription
        }
      }
    `;

  try {
    const response = await fetch(GRAPHQL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();
    return json?.data?.Post;
  } catch (error) {
    console.error("Err: ", error);
    return [];
  }
}
