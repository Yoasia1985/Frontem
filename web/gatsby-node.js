const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/postTemplate.js`);
  const result = await graphql(`
    query {
      all: allSanityPost {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `);
  result.data.all.nodes.forEach((post) => {
    createPage({
      path: `/blog/${post.slug.current}`,
      component: blogPostTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
};
