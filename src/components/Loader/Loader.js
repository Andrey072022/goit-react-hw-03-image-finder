import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import css from './Loader.module.css';

export const loader = () => {
  return (
    <div className={css.loader_wrapper}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default loader;

