import { GetStaticProps } from 'next';
import DiabetesPage from '@/src/pages/Diabetes';

export default function Diabetes() {
  return <DiabetesPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};