import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Full stack MERN Developer, harikumarDev portfolio website"
          />
          <meta
            name="keywords"
            content="Full stack web developer, MERN Developer, AWS, hari kumar, hari, harikumarDev"
          />
        </Head>
        <body className="bg-gradient-to-r from-blue to-pink dark:from-dark-500 dark:to-dark-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
