import App, { Container } from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Next-TypeScript-Paths</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
