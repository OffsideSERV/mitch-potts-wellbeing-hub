import { GetStaticProps } from 'next';
import ThyroidNaturopathyPage from '@/src/pages/ThyroidNaturopathy';

export default function ThyroidNaturopathy() {
  return <ThyroidNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};