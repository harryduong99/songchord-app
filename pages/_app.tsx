import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/store'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-HFR9ER6QTC"
      strategy="afterInteractive"
    />
      <Script id="google-analytics" strategy="afterInteractive">
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', 'G-HFR9ER6QTC');`
        }
        
      </Script>
      <Component {...pageProps} />
    </>
  ) 
}

export default wrapper.withRedux(MyApp)
