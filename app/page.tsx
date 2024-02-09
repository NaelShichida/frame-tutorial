import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmcQVMUmP3jxXwEG3uzMUGAXgp9dSn27fdn47dxypE1Wjg/?0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'VERA Rebellion',
  description: 'A frame telling the story of VERA',
  openGraph: {
    title: 'VERA Rebellion',
    description: 'A frame telling the story of the VERA rebellion',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmcQVMUmP3jxXwEG3uzMUGAXgp9dSn27fdn47dxypE1Wjg/?0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>VERA Rebellionz1</h1>
    </>
  );
}