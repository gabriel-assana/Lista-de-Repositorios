import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

interface ReposioryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}

function ReposioryItem (props: ReposioryItemProps){
    return(
        <li className="card-repository">
            <div>
                <FaGithubSquare className="icon-git" size={25}/>
                {props.repository.name}
            </div>
            {/* {props.repostory.name ?? 'Default'} 
                  ?? - siginifica que se o props.repostory.name vim vazio 
                  ele atribui o 'Default' */}
                       
            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
       </li>

    )
}

export default ReposioryItem