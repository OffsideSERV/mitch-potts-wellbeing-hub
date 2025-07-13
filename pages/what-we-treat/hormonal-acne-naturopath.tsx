import { GetStaticProps } from 'next';
import HormonalAcneNaturopathyPage from '@/src/pages/HormonalAcneNaturopathy';

export default function HormonalAcneNaturopathy() {
  return <HormonalAcneNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};