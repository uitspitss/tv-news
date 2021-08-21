import React from 'react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { extractCritical } from '@emotion/server';

import { GA_TRACKING_ID } from '~/lib/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);

    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          {/* <link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap&subset=japanese" rel="stylesheet" /> */}
          <style
            // @ts-ignore twin.macro
            data-emotion-css={this.props.ids.join(' ')}
            // @ts-ignore twin.macro
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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
