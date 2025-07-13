import { GetStaticProps } from 'next';
import GutHealth101Page from '@/src/pages/GutHealth101';

export default function GutHealth101() {
  return <GutHealth101Page />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};