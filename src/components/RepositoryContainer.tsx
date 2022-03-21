import RepositoryList from './RepositoryList';


export default function ReposioryContainer (){
        
    return(
       <>
            <form>
                <input type="text" placeholder="Type the GitHub username"></input>
                <button type="submit">Search</button>
            </form>
            <RepositoryList />
       </> 
    )
}