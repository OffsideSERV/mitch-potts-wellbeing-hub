import { GetStaticProps } from 'next';
import IndexPage from '@/src/pages/Index';

export default function Home() {
  return <IndexPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};