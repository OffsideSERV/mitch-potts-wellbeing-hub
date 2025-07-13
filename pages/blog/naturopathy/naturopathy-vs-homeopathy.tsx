import { GetStaticProps } from 'next';
import NaturopathyVsHomeopathyPage from '@/src/pages/NaturopathyVsHomeopathy';

export default function NaturopathyVsHomeopathy() {
  return <NaturopathyVsHomeopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};