import { GetStaticProps } from 'next';
import ADHDNaturopathyPage from '@/src/pages/ADHDNaturopathy';

export default function ADHDNaturopathy() {
  return <ADHDNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};