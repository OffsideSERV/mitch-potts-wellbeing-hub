import { GetStaticProps } from 'next';
import AreasPage from '@/src/pages/Areas';

export default function Areas() {
  return <AreasPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};