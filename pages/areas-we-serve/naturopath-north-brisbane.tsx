import { GetStaticProps } from 'next';
import NorthBrisbaneNaturopathyPage from '@/src/pages/NorthBrisbaneNaturopathy';

export default function NorthBrisbaneNaturopathy() {
  return <NorthBrisbaneNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};