export const getGovGradCam = `query GetGovGradCam($ds_art: String!) {
    getGovGradCAM(ds_art: $ds_art) {
      ds_art
      image
    }
  }
  `;

export const getInvokabilties = `query GetInvokabilties($ds: Int!) {
    getInvokabilties(ds: $ds) {
      ds
      scores
    }
  }
  `;