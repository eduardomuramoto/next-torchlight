// utils/getStaticImage.js
import { StaticImageData } from 'next/image';

export async function getStaticImage(imageName: string,folder:string): Promise<StaticImageData | null> {
  try {
    // Dynamically import the image based on the name.
    const image: StaticImageData = await import(`@images/icons/${folder}/${imageName}.png`);
    return image;
  } catch (error) {
    console.error(`Error loading image: ${imageName}`, error);
    return null;
  }
}
