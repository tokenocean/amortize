const BRANDING = {
  projectName: 'Amortize',

  superUserName: 'amortize',

  urls: {
    base: 'amortize.com',
    www: 'www.amortize.com',
    protocol: 'https://amortize.com',
    external: {
      twitter: 'https://twitter.com/amortize',
      telegram: 'https://t.me/amortize',
      blog: 'https://blog.amortize.com/',
    }
  },

  meta: {
      title: 'Amortize',
      keywords: "Bitcoin Liquid NFT Art",
      description: "Upload, collect, and transact rare digital art on the Liquid Network",
        image: 'https://amortize.com/splash.png',
        url: 'https://.com/',

      twitter: {
        card: 'summary_large_image',
        creator: '@amortize',
        site: '@amortize',
      },

    artwork: (art) => ({
      title: `Amortize - ${art.title}`,
      image: `/api/ipfs/${art.filename}`,
      url: `https://amortize.com/a/${art.slug}`,
    })

  },

  emails: {
    support : 'support@amortize.com'
  }
};

export default BRANDING;
