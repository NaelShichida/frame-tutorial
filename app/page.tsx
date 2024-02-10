import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_BASE_URL,NEXT_PUBLIC_GATEWAY_URL} from './config';


const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Read the tales of VERA",
    }
  ],
  image: `${NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmcQVMUmP3jxXwEG3uzMUGAXgp9dSn27fdn47dxypE1Wjg/0.png`,
  post_url: `${NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'VERA Rebellion',
  description: 'A frame telling the story of VERA',
  openGraph: {
    title: 'VERA Rebellion',
    description: 'A frame telling the story of the VERA rebellion',
    images: [`${NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmcQVMUmP3jxXwEG3uzMUGAXgp9dSn27fdn47dxypE1Wjg/0.png`],
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