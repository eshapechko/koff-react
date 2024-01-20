import PuffLoader from 'react-spinners/PuffLoader';

export const Loader = () => (
  <PuffLoader
    color='#9200b7'
    cssOverride={{ margin: '50px auto' }}
    loading
    size={100}
    speedMultiplier={2}
  />
);
