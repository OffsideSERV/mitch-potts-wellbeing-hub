import { GetStaticProps } from 'next';
import PersonalTrainingPage from '@/src/pages/PersonalTraining';

export default function PersonalTraining() {
  return <PersonalTrainingPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};