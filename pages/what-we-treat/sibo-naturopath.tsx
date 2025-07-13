import { GetStaticProps } from 'next';
import SIBONaturopathyPage from '@/src/pages/SIBONaturopathy';

export default function SIBONaturopathy() {
  return <SIBONaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};