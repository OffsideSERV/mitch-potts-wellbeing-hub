import { GetStaticProps } from 'next';
import NutritionistBrisbanePage from '@/src/pages/NutritionistBrisbane';

export default function NutritionistBrisbane() {
  return <NutritionistBrisbanePage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};