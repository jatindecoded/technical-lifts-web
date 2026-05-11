/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://technicallifts.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "./out",
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
