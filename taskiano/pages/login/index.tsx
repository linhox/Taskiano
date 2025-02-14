import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

import { useAuth } from "../../hooks/useAuth";

import Logo from "../../components/Logo";
import Particles from "../../components/pages/Login/Particles";
import ButtonProvider from "../../components/pages/Login/ButtonProvider";

import styles from "./styles.module.scss";

const Login: NextPage = () => {
  const signIn = useAuth((ctx) => ctx.signIn);

  return (
    <div className={styles.pageAuth}>
      <Head>
        <title>Taskiano | Login</title>
        <meta name="description" content="To-do" />
        <meta
          name="google-site-verification"
          content="sgkXcZZTMacCng8hHTlU2Ffgm6EPE6zUiepuEjtdvt4"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={styles.sidebar}>
        <Particles />

        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>

          <h1 className={styles.logoText}>TASKIANO</h1>
        </div>
      </aside>

      <main>
        <div className={styles.mainContent}>
          <span>Entrar com...</span>
          <ButtonProvider
            name="Google"
            provider={GoogleAuthProvider.PROVIDER_ID}
            handleSingIn={signIn}
          >
            <FcGoogle />
          </ButtonProvider>

          <ButtonProvider
            name="Twitter"
            provider={TwitterAuthProvider.PROVIDER_ID}
            handleSingIn={signIn}
          >
            <AiFillTwitterCircle color="#57A9E3" />
          </ButtonProvider>

          <ButtonProvider
            name="Facebook"
            provider={FacebookAuthProvider.PROVIDER_ID}
            handleSingIn={signIn}
          >
            <FaFacebook color="#3D5694" />
          </ButtonProvider>

          <ButtonProvider
            name="GitHub"
            provider={GithubAuthProvider.PROVIDER_ID}
            handleSingIn={signIn}
          >
            <AiFillGithub />
          </ButtonProvider>
        </div>
      </main>
    </div>
  );
};

export default Login;
