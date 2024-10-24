/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.developertiz.com/',
    exclude: ['/favicon.ico', '/apple-icon.png', '/manifest.webmanifest', '/tags/*'],
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}