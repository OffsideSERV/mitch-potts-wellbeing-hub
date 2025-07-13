import { GetStaticProps } from 'next';
import GutHealthPage from '@/src/pages/GutHealth';

export default function GutHealth() {
  return <GutHealthPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};