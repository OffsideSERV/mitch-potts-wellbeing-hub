import { GetStaticProps } from 'next';
import BestTeaForStomachPainPage from '@/src/pages/BestTeaForStomachPain';

export default function BestTeaForStomachPain() {
  return <BestTeaForStomachPainPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};