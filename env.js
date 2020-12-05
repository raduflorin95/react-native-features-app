const variables = {
  development: {
    googleApiKey: "AIzaSyA2S3dRF6Xrh4iPoNsjInvQJ9Y9SGJd6yA",
  },
  production: {
    googleApiKey: "AIzaSyA2S3dRF6Xrh4iPoNsjInvQJ9Y9SGJd6yA",
  },
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development; // return this if in development mode
  }
  return variables.production; // otherwise, return this
};

export default getEnvVariables; // export a reference to the function
