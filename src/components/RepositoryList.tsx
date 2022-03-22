import '../styles/repositories.scss';

import RepositoryItem from './RepositoryItem';

interface Reposiory { 
    name: string,
    description: string,
    html_url: string
}

interface ReposioryListProp{
    repositories: Reposiory[]
}


function RepositoryList({repositories}: ReposioryListProp){     

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