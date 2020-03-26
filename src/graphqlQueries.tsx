export const getGovGradCam = `query GetGovGradCam($ds_art: String!) {
    getGovGradCAM(ds_art: $ds_art) {
      ds_art
      image
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