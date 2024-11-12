// components/Metadata.tsx
import { Metadata } from "next";

interface MetadataProps {
  pageTitle: string;
  description: string;
}

export function generateMetadata({ pageTitle, description }: MetadataProps): Metadata {
  return {
    title: pageTitle,
    description: description,
    openGraph: {
      title: pageTitle,
      description: description,
    },
    twitter: {
      title: pageTitle,
      description: description,
    },
  };
}
