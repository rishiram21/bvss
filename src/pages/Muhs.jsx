import React from 'react';
import { useEffect } from 'react';

const Muhs = () => {

  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  return (
    <PageTemplate
      title="Muhs"
      content={
        <div>
          <p>Information about Muhs.</p>
          <p>Learn more about our Muhs services.</p>
        </div>
      }
    />
  );
};

export default Muhs;
