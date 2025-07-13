import { GetStaticProps } from 'next';
import HowToFlushSalicylatesPage from '@/src/pages/HowToFlushSalicylates';

export default function HowToFlushSalicylates() {
  return <HowToFlushSalicylatesPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};