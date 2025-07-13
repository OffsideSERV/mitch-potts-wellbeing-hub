import { GetStaticProps } from 'next';
import EczemaNaturopathyPage from '@/src/pages/EczemaNaturopathy';

export default function EczemaNaturopathy() {
  return <EczemaNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};