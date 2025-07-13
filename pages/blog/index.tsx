import { GetStaticProps } from 'next';
import BlogPage from '@/src/pages/Blog';

export default function Blog() {
  return <BlogPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};