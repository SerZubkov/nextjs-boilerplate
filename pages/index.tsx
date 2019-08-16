import React from 'react';

type Props = {
  message: string;
};

const Index: FCPage<Props> = ({ message }) => (
  <>
    <div>{message}</div>
  </>
);

Index.getInitialProps = async () => {
  return { message: 'Hello, World!' };
};

export default Index;
