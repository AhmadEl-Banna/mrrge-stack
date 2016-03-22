import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';

import routes from './routes';

export default (Root, state) => {
    /* render `Root` (the complete document) to string
           and rewind Helmet for access to its data.
           Read about why rewinding is necessary on the server:
           https://github.com/nfl/react-helmet#server-usage */
        let renderedBody = React.renderToString(<Root />);
        let head = Helmet.rewind();

        /* render document with Helmet-rendered `<head>` info
           and React-rendered body. then, initialize the client
           side via `client.js`.
           Note: Helmet will update your page's `<head`> on the client
                 side, but you must construct `<head>` manually
                 on the server. */
        let html = `
            <!doctype html>
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>${head.title}</title>
                    ${head.meta}
                    ${head.link}
                </head>
                <body>
                    <div id="app">${renderedBody}</div>
                    <script src="/static/client.js"></script>
                </body>
            </html>
        `;

        /* write html, close connection */
        res.write(html);
        res.end();
}