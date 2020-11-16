import Document, { Html, Head, Main, NextScript } from 'next/document'
// import '@google/model-viewer';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDocument