// src/app/sitemap.js

export default function sitemap() {
  const baseUrl = 'https://ahmedrazaportfolio.netlify.app';

  // Core portfolio route configurations
  const routes = ['', '/skills', '/experience', '/certificates', '/projects', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0], // Automatically tracks deployment date
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}