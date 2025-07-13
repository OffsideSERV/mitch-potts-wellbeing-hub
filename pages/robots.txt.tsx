import { GetStaticProps } from 'next';
import RobotsPageComponent from '@/src/pages/RobotsPage';

export default function RobotsPage() {
  return <RobotsPageComponent />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};