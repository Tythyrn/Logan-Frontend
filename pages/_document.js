import Document, {Html, Head, Main, NextScript} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link 
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          />
          <link 
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap"
          />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/styles/normalize.css" />
          <link rel="stylesheet" href="/styles/baguetteBox.min.css" />
          <link rel="stylesheet" href="/styles/globals.css" />
          <script src="https://kit.fontawesome.com/28774f5dc9.js" crossOrigin="anonymous"></script>
          <meta property="og:title" content="Logan Rundquist Portfolio | LSR Creative" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Portfolio website of graphic designer Logan Rundquist" />
          <meta property="og:image" content="https://media.graphcms.com/H35xS37gSciktcHfYpN8" />
          <meta property="og:url" content="https://lsrcreative.art/" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}