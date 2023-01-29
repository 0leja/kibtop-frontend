import { Html, Head, Main, NextScript } from 'next/document'




export default function Document() {
  return (
    <Html>
        <Head>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/> */}
                    
            <link rel="stylesheet" href="/fonts/SFPro/stylesheet.css" />

            {/* <link rel="stylesheet" href="/fonts/OpenSans/base/stylesheet.css" /> */}
            <link rel="stylesheet" href="/fonts/OpenSans/ttf/stylesheet.css" />
            {/* <link rel="stylesheet" href="/fonts/OpenSans/cons/stylesheet.css" /> */}
            {/* <link rel="stylesheet" href="/fonts/OpenSans/google/stylesheet.css" /> */}




            <link rel="stylesheet"  href="/fonts/PasswordIcons/stylesheet.css" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}