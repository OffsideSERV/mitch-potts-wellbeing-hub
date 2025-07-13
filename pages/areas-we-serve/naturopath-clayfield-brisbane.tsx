import { GetStaticProps } from 'next';
import ClayfieldNaturopathyPage from '@/src/pages/ClayfieldNaturopathy';

export default function ClayfieldNaturopathy() {
  return <ClayfieldNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};