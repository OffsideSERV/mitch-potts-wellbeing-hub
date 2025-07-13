import { GetStaticProps } from 'next';
import WeightLossPage from '@/src/pages/WeightLoss';

export default function WeightLoss() {
  return <WeightLossPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};