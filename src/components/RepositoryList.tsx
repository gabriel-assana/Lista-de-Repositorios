import '../styles/repositories.scss';

import React, { useEffect, useState } from 'react';

import RepositoryItem from './ReposioryItem';

interface Reposiory { 
    name: string,
    description: string,
    html_url: string
}

function RepositoryList(){

    const [repositories, setRepositories] = useState<Reposiory[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
           .then(response => response.json())
           .then(data => setRepositories(data))
    },[]);

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                   return <RepositoryItem  key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}

export default RepositoryList