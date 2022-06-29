import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  usePageViews();

  return (
    <>
      <span className="theme-bejamas" />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
