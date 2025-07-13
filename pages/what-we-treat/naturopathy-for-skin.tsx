import { GetStaticProps } from 'next';
import SkinNaturopathyPage from '@/src/pages/SkinNaturopathy';

export default function SkinNaturopathy() {
  return <SkinNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};