import React from 'react';

interface ReposioryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}

function ReposioryItem (props: ReposioryItemProps){
    return(
        <li>
            <strong>{props.repository.name}</strong>
            {/* {props.repostory.name ?? 'Default'} 
                  ?? - siginifica que se o props.repostory.name vim vazio 
                  ele atribui o 'Default' */}
            <p>props.repository.description</p>
            
            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
       </li>

    )
}

export default ReposioryItem