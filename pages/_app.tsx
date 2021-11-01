import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className={styles.wrapper}>    
      <Head>
        <title>ILS-Irish Laundry System</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
// module.exports = {
//   poweredByHeader: false,
// }
export default MyApp
