import { AppProps } from 'next/app'
import '../styles/normalize.css'
import '../styles/baguetteBox.min.css'
import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;