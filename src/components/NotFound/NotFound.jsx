import React from 'react';
import style from "./NotFound.module.css";


const NotFound = () => {
  return (
    <div className={style.notFound}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;

