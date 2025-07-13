import { GetStaticProps } from 'next';
import BookNowPage from '@/src/pages/BookNow';

export default function BookNow() {
  return <BookNowPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};