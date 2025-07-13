import { GetStaticProps } from 'next';
import IBSNaturopathyPage from '@/src/pages/IBSNaturopathy';

export default function IBSNaturopathy() {
  return <IBSNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};