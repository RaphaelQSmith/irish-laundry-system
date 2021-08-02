import type { AppProps } from 'next/app'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import HeaderButtons from './components/HeaderButtons'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className={styles.wrapper}>    
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
export default MyApp
