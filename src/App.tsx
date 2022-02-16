import { useEffect, useState } from "react";
import axios from 'axios';
import { useFetch } from "./hooks/useFetch";
import loading from "./assets/loading.svg"

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>('users/diego3g/repos'); 

  
  return (
    <ul>
      { isFetching && <img src={loading} />}
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
