export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6053c1a24eb6ce08fcbff407",
                  title: "Sanity Studio",
                  name: "frontem-studio",
                  apiId: "d6047a54-06b4-4cd3-aa21-1354e20eec9f",
                },
                {
                  buildHookId: "6053c1a24eb6ce0ee3bff08f",
                  title: "Blog Website",
                  name: "frontem",
                  apiId: "bfc0fe1b-bda5-4956-99d8-34945ecb0161",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ostafinskim/Frontem",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://frontem.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
