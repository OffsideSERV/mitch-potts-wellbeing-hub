import { GetStaticProps } from 'next';
import WindsorNaturopathyPage from '@/src/pages/WindsorNaturopathy';

export default function WindsorNaturopathy() {
  return <WindsorNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};