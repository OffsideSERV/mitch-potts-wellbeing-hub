import { GetStaticProps } from 'next';
import NewFarmNaturopathyPage from '@/src/pages/NewFarmNaturopathy';

export default function NewFarmNaturopathy() {
  return <NewFarmNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};