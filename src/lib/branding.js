const BRANDING = {
  projectName: "Amortize",

  superUserName: "amortize",

  urls: {
    base: "amortize.pro",
    www: "www.amortize.pro",
    protocol: "https://amortize.pro",
    external: {
      twitter: "https://twitter.com/amortize",
      telegram: "https://t.me/amortize",
      blog: "https://blog.amortize.pro/",
    },
  },

  meta: {
    title: "Amortize",
    keywords: "Bitcoin Liquid NFT Art",
    description:
      "Upload, collect, and transact rare digital art on the Liquid Network",
    image: "https://amortize.pro/splash.png",
    url: "https://.com/",

    twitter: {
      card: "summary_large_image",
      creator: "@amortize",
      site: "@amortize",
    },

    artwork: (art) => ({
      title: `Amortize - ${art.title}`,
      image: `/api/ipfs/${art.filename}`,
      url: `https://amortize.pro/a/${art.slug}`,
    }),
  },

  emails: {
    support: "support@amortize.pro",
  },
};

export default BRANDING;
