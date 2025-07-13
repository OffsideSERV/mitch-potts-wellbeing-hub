import { GetStaticProps } from 'next';
import WorstFoodsForGutHealthPage from '@/src/pages/WorstFoodsForGutHealth';

export default function WorstFoodsForGutHealth() {
  return <WorstFoodsForGutHealthPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};