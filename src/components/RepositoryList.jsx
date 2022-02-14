import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

const repository = {
    name: 'React',
    description: 'Forms in React',
    link: 'https://reactjs.org/',
}
export function RepositoryList(){

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem />
            </ul>
        </section>
    )
}
