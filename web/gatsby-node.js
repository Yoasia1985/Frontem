const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const singlePostTemplate = path.resolve(`src/templates/Post.js`);
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);
  data.posts.nodes.forEach((post) => {
    createPage({
      path: `blog/${post.slug.current}`,
      component: singlePostTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
};
