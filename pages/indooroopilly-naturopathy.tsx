import { GetStaticProps } from 'next';
import IndooroopillyNaturopathyPage from '@/src/pages/IndooroopillyNaturopathy';

export default function IndooroopillyNaturopathy() {
  return <IndooroopillyNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};