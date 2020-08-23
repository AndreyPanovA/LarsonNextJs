import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { Footer } from "../components/footer/Footer"

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>LarsonKeys</title>
                </Head>
                <body>
                    <Main />
                    {/* <Footer color="black" /> */}
                    <NextScript />

                </body>
            </Html>
        )
    }
}

export default MyDocument