import { GetStaticProps } from 'next';
import AcneNaturopathyPage from '@/src/pages/AcneNaturopathy';

export default function AcneNaturopathy() {
  return <AcneNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};