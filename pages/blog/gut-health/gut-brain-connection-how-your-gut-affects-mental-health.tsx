import { GetStaticProps } from 'next';
import GutBrainConnectionPage from '@/src/pages/GutBrainConnection';

export default function GutBrainConnection() {
  return <GutBrainConnectionPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};