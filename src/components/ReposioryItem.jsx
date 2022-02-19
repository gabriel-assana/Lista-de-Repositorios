import React from 'react';

function ReposioryItem (props){
    return(
        <li>
            <strong>{props.repository.name}</strong>
            {/* {props.repostory.name ?? 'Default'} 
                  ?? - siginifica que se o props.repostory.name vim vazio 
                  ele atribui o 'Default' */}
            <p>Forms in React</p>
            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
       </li>

    )
}

export default ReposioryItem