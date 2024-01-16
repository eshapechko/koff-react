import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={302}
    height={400}
    viewBox='0 0 302 400'
    backgroundColor='#c7c2c2'
    foregroundColor='#99b2a1'>
    <rect x='0' y='287' rx='10' ry='10' width='204' height='20' />
    <rect x='0' y='323' rx='16' ry='16' width='302' height='38' />
    <rect x='0' y='452' rx='10' ry='10' width='95' height='30' />
    <rect x='126' y='443' rx='24' ry='24' width='152' height='45' />
    <rect x='0' y='15' rx='16' ry='16' width='302' height='250' />
    <rect x='228' y='287' rx='10' ry='10' width='68' height='20' />
  </ContentLoader>
);
