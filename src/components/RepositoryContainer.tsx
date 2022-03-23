import '../styles/repositoryContainer.scss';

import { FormEvent, useState } from 'react';

import RepositoryList from './RepositoryList';

interface Reposiory { 
    name: string,
    description: string,
    html_url: string
}

export default function ReposioryContainer (){
        
    const [user, setUser] = useState("");
    const [repositories, setRepositories] = useState<Reposiory[]>([]);

    function getUser(e: FormEvent){
        e.preventDefault();
        
        setUser(user)
        
        if(user !== ""){
            fetch(`https://api.github.com/users/${user}/repos`)
                .then(response => response.json())
                .then(data => setRepositories(data))
                console.log(repositories)
        }
        
       
    }

    return(
       <>
        <div className="container">
                <header className="header-title">
                    <div>
                    <h1>Reposiory.Hunter</h1>
                    </div>
                </header>

                <section className="section-search">
                    <form onSubmit={getUser} className="form">
                        <input 
                            type="text" 
                            placeholder="Qual usuario do GitHub deseja buscar ?"
                            onChange={(e) => setUser(e.target.value)}

                        >
                        </input>
                        <button 
                            type="submit">Pesquisar</button>
                    </form>
                </section>
                <RepositoryList repositories={repositories}/>
            </div>   
        </>
    )
}