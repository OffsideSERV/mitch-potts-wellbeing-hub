import { GetStaticProps } from 'next';
import FunctionalMedicinePage from '@/src/pages/FunctionalMedicine';

export default function FunctionalMedicine() {
  return <FunctionalMedicinePage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};