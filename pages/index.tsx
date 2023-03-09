import Head from "next/head";
import { RandomCapy } from "../components/RandomCapy";

export default function Home() {
  const max = 739;
  const min = 1;
  const random = () => Math.floor(Math.random() * (max - min) + min);
  return (
    <>
      <Head>
        <title>Typescript/React Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RandomCapy image={`https://api.capy.lol/v1/capybara/${random()}`} />
      </main>
    </>
  );
}
