export const getGovGradCam = `query GetGovGradCam($ds_art: String!) {
    getGovGradCAM(ds_art: $ds_art) {
      ds_art
      image
    }
  }
  `;
