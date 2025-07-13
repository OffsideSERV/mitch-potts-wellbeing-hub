import { GetStaticProps } from 'next';
import SitemapPageComponent from '@/src/pages/SitemapPage';

export default function SitemapPage() {
  return <SitemapPageComponent />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};