import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
// import createEmotionServer from '@emotion/server/create-instance';
// import createCache from '@emotion/cache';

// const key = 'custom';
// const cache = createCache({ key });
// const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        // Emotion SSR
        // const chunks = extractCriticalToChunks(initialProps.html);
        // const styles = constructStyleTagsFromChunks(chunks);

        return initialProps;
    }

    render() {
        return (
            <Html lang="nl">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
                        rel="stylesheet"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700;900&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
