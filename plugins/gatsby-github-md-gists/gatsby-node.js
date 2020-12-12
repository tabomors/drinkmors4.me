const axios = require('axios');
const _ = require('lodash');

const MARKDOWN_TYPE = 'text/markdown';
const NODE_TYPE = 'GithubMarkdownFile';

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest },
  { author, token }
) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  const { data } = await axios({
    url: `https://api.github.com/users/${author}/gists`,
    headers,
  });

  const allGistsData = await Promise.all(
    data.map((x) => {
      return axios({ url: x.url, headers });
    })
  );
  const mdFiles = _.flatten(
    allGistsData.map(({ data: gist }) => {
      const id = gist.node_id;
      const files = Object.entries(gist.files).map(
        ([fileName, fileContent]) => {
          return {
            name: fileName,
            content: fileContent.content,
            type: fileContent.type,
            id: `${id}_${fileName}`,
          };
        }
      );
      return files;
    })
  ).filter((file) => file.type === MARKDOWN_TYPE);

  mdFiles.forEach((mfFile) => {
    const nodeMeta = {
      id: createNodeId(mfFile.id),
      parent: null,
      children: [],
      internal: {
        mediaType: MARKDOWN_TYPE,
        content: mfFile.content,
        contentDigest: createContentDigest(mfFile.content),
        type: NODE_TYPE,
      },
    };
    createNode(nodeMeta);
  });
};
