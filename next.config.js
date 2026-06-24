/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // This replaces the old babel-plugin-styled-components configuration
    styledComponents: true,
  },
  // If you plan to deploy as a fully static site on a standard web server:
  // output: 'export', 
};

module.exports = nextConfig;