// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
    })

    return config
  },
  images: {
    domains: ["i.postimg.cc","rafaelsantos01.github.io"],
  },
}

module.exports = nextConfig