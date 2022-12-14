import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from "./Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TarefaProvider } from '../context/tarefaContext';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lista Tarefas Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TarefaProvider>
        <Homepage />
      </TarefaProvider>
    </div>
  )
}

export default Home
