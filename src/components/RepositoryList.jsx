const repositoryName = "unform2";
export function RepositoryList(){

    return (
        <section className="repositoryList">
            <h1>Lista de repositórios</h1>
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="#">Acessar repositórios</a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="#">Acessar repositórios</a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="#">Acessar repositórios</a>
                </li>
            </ul>
        </section>
    )
}