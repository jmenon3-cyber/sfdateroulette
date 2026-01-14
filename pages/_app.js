import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/next'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <div className="app-footer">@jmenon3</div>
    </>
  )
}
