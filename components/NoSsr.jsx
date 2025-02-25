import dynamic from 'next/dynamic';

const Component = () => Promise.resolve(({ children }) => children);
const NoSsr = dynamic(Component, { ssr: false });

export default NoSsr;
