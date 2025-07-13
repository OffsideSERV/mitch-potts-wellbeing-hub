import { GetStaticProps } from 'next';
import GutHealthSpecialistPage from '@/src/pages/GutHealthSpecialist';

export default function GutHealthSpecialist() {
  return <GutHealthSpecialistPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};