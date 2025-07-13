import { GetStaticProps } from 'next';
import HamiltonNaturopathyPage from '@/src/pages/HamiltonNaturopathy';

export default function HamiltonNaturopathy() {
  return <HamiltonNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};