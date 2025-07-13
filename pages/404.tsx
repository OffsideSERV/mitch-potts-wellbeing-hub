import { GetStaticProps } from 'next';
import NotFoundPage from '@/src/pages/NotFound';

export default function NotFound() {
  return <NotFoundPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};