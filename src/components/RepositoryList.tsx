import '../styles/repositories.scss';

import { useEffect, useState } from 'react';

import RepositoryItem from './RepositoryItem';

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
            <ul>
                {repositories.map(repository => {
                   return <RepositoryItem  key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}

export default RepositoryList