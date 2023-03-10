import { useState } from "react";
import Head from "next/head";
import { RandomCapy } from "../components/RandomCapy";

const generateId = () => Math.random().toString(36).substring(2, 9);
type ImageItem = { id: string; url: string };

export default function Home() {
  const max = 739;
  const min = 1;
  const random = () => Math.floor(Math.random() * (max - min) + min);

  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewCapy = () => {
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://api.capy.lol/v1/capybara/${random()}`,
    };
    setImages([
      ...images,
      newImageItem
    ]);
  };
  return (
    <>
      <Head>
        <title>Typescript/React Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={addNewCapy}>Add new Capy</button>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomCapy image={url} />
          </div>
        ))}
      </main>
    </>
  );
}
