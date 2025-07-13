import { GetStaticProps } from 'next';
import MLSLaserPage from '@/src/pages/MLSLaser';

export default function MLSLaser() {
  return <MLSLaserPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};