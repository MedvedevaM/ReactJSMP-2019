import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Root from './Root.jsx';
import configureStore from './store';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>Netflix</title>
          <link rel="stylesheet" href="/main.css"></link>
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/app.bundle.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore(undefined, { ssr: true });
    const context = {};
    const root = (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    store.runSaga().toPromise().then(() => {
      const html = renderToString(root);
      res.send(renderHTML(html, store.getState()));
    });

    renderToString(root);
    store.close();
  };
}
