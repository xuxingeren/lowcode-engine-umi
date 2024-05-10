import { IApi } from '@umijs/max';

const isDev = process.env.NODE_ENV;

export default (api: IApi) => {
  api.addHTMLLinks(() => [
    {
      href: 'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine/1.3.2/dist/css/engine-core.css',
      rel: 'stylesheet',
    },
    {
      href: 'https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.css',
      rel: 'stylesheet',
    },
    {
      href: 'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light/0.2.0/next.min.css',
      rel: 'stylesheet',
    },
    {
      href: 'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine-ext/1.0.6/dist/css/engine-ext.css',
      rel: 'stylesheet',
    },
  ]);

  api.addHTMLHeadScripts(() => [
    {
      async: false,
      defer: true,
      src: `https://g.alicdn.com/code/lib/react/18.1.0/umd/react.${
        isDev ? 'development' : 'production'
      }.js`,
    },
    {
      async: false,
      defer: true,
      src: `https://g.alicdn.com/code/lib/react-dom/18.1.0/umd/react-dom.${
        isDev ? 'development' : 'production'
      }.js`,
    },
    {
      async: false,
      defer: true,
      src: 'https://g.alicdn.com/code/lib/prop-types/15.8.1/prop-types.js',
    },
    {
      async: false,
      defer: true,
      src: 'https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js',
    },
    {
      async: false,
      defer: true,
      src: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
    },
    {
      async: false,
      defer: true,
      src: 'https://g.alicdn.com/code/lib/moment.js/2.29.1/moment-with-locales.min.js',
    },
    {
      async: false,
      defer: true,
      src: 'https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js',
    },
    {
      async: false,
      defer: true,
      src: 'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine/1.3.2/dist/js/engine-core.js',
    },
    {
      async: false,
      defer: true,
      src: 'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine-ext/1.0.6/dist/js/engine-ext.js',
    },
  ]);

  api.modifyHTML(($) => {
    Object.keys($('script') || {}).forEach((item) => {
      const index = Number(item);
      if (!Number.isNaN(index)) {
        const src = $('script')[index].attribs.src;
        if (src && src.indexOf('/umi.js') !== -1) {
          $($('script')[index]).attr('defer', 'true');
        }
      }
    });
    return $;
  });
};
