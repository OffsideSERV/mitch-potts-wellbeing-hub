import { GetStaticProps } from 'next';
import NaturopathyForWeightLossPage from '@/src/pages/NaturopathyForWeightLoss';

export default function NaturopathyForWeightLoss() {
  return <NaturopathyForWeightLossPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};