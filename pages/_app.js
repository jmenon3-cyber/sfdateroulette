import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className="app-footer">@jmenon3</div>
      <Analytics />
    </>
  )
}
