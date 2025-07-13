import { GetStaticProps } from 'next';
import AnxietyNaturopathyPage from '@/src/pages/AnxietyNaturopathy';

export default function AnxietyNaturopathy() {
  return <AnxietyNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};