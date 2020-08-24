import '../styles/globals.scss'
import { Provider } from "react-redux"
import store from "../components/store"
import { connect } from "react-redux"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp
