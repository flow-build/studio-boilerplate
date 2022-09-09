import React from "react";
import {getRemoteToken} from '../../services/auth/auth';

const Home: React.FC = () => {
  return (
    <>
      <h1>Home Works!</h1>
      <button type={"button"} onClick={() => getRemoteToken()}>
        Click me!
      </button>
    </>
  );
};

export { Home };
