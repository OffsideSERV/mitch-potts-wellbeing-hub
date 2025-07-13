import { GetStaticProps } from 'next';
import GutFreedomOptInPage from '@/src/pages/GutFreedomOptIn';

export default function GutFreedomOptIn() {
  return <GutFreedomOptInPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};