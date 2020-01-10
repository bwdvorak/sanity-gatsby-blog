export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1894eff3cb710702164361',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kpg5ewhe',
                  apiId: 'a5c9c2a0-6a66-4dbf-8e4c-7f8bf3d32f27'
                },
                {
                  buildHookId: '5e1894efac7affe5e7ad0d55',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-s7dkd22y',
                  apiId: '8af05067-6eff-4bc4-953c-160147271050'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bwdvorak/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-s7dkd22y.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
