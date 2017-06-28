const githubApi = require('../api/github');
const gitlabApi = require('../api/gitlab');

module.exports = {
  // TODO: Centralise platform-specific functions here (e.g. wording)
  getApi,
};

function getApi(platform) {
  if (platform === 'github') {
    return githubApi;
  } else if (platform === 'gitlab') {
    return gitlabApi;
  }
  throw new Error(`Unknown platform: ${platform}`);
}