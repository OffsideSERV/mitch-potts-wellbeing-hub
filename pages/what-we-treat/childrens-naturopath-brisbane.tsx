import { GetStaticProps } from 'next';
import ChildrensHealthPage from '@/src/pages/ChildrensHealth';

export default function ChildrensHealth() {
  return <ChildrensHealthPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};