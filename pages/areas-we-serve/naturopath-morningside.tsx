import { GetStaticProps } from 'next';
import MorningsideNaturopathyPage from '@/src/pages/MorningsideNaturopathy';

export default function MorningsideNaturopathy() {
  return <MorningsideNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};