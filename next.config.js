const path = require('path');

module.exports = {
    reactStrictMode: true,
    // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    images: {
        loader: 'akamai',
        path: '/'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "variables.module.scss";`
    },
    exportPathMap: () => ({
        '/': { page: '/' }
    })
};
