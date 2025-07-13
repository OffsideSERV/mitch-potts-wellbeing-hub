import { GetStaticProps } from 'next';
import NXTLVLTonicsPage from '@/src/pages/NXTLVLTonics';

export default function NXTLVLTonics() {
  return <NXTLVLTonicsPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};