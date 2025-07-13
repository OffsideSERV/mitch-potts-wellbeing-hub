import { GetStaticProps } from 'next';
import NaturopathicNutritionistPage from '@/src/pages/NaturopathicNutritionist';

export default function NaturopathicNutritionist() {
  return <NaturopathicNutritionistPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};