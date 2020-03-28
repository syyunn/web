export const getGovGradCam = `query GetGovGradCam($ds_art: String!, $version: String!) {
  getGovGradCAM(ds_art: $ds_art, version: $version) {
    ds_art
    version
    weights
  }
}
`;

export const getInvokabilities = `query GetInvokabilities($ds_split: String!, $version: String!) {
  getInvokabilities(ds_split: $ds_split, version: $version) {
    ds_split
    version
    scores
  }
}
`;

export const getGovTokenized = `query GetGovTokenized($ds: Int!, $version: String!) {
  getGovTokenized(ds: $ds, version: $version) {
    ds
    version
    tokens
  }
}
`;

export const getArticleTokenized = `query GetArticleTokenized($article: String!, $version: String!) {
  getArticleTokenized(article: $article, version: $version) {
    article
    version
    tokens
  }
}
`;
