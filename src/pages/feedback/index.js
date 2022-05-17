import Layout from '@theme/Layout';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const BoardToken = '1aaa5ced-939b-8115-81d5-129a3244a3f1';

const Feedback = () => {
  useEffect(() => {
    (function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(window,document,"canny-jssdk","script");

    Canny('render', {
      boardToken: BoardToken,
      basePath: "/feedback",
      ssoToken: null,
    });
  }, []);

  return (
    <Layout title="Feedback" description="nanos world Feedback Page" style={{"background-color": "red"}}>
      <div
        className={clsx('container', 'margin-vert--lg', styles.header)}
      >
        <h2>Welcome to the official nanos world Feedback Hub!</h2>
        <p>
          You can also check out our standalone <a href="https://roadmap.nanos.world" target="_blank">Roadmap & Ideas page</a>, with all ideas accepted into the game.
          <br/>
          <span className={clsx(styles.sorry)}>Sorry it doesn't support Dark Mode yet</span>
        </p>
      </div>
      <main
        className={clsx('container', 'margin-vert--lg', styles.main)}
        data-canny
      />
    </Layout>
  );
}

export default Feedback;
