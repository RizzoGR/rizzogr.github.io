import classes from "./CardList.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

function CardList() {
    const [repos, setRepos] = useState([]);

    const getRepos = async () => {
        const response = await fetch(
            "https://api.github.com/users/RizzoGR/repos"
        ).catch((error) => {
            console.log(error);
        });
        setRepos(await response.json());
    };

    useEffect(() => {
        getRepos();
    }, []);

    console.log(repos);

    return (
        <div>
            <h1 className={classes.cardlisttitle}>Repositories</h1>
            <div className={classes.cardlist}>
                {repos.map((repo) => {
                    return (
                        <a
                            href={repo.clone_url}
                            className={classes.cardLink}
                            key={repo.id}
                        >
                            <Card
                                id={repo.node_id}
                                title={repo.name}
                                image={
                                    repo.language === "Python"
                                        ? "https://www.fintechnews.org/wp-content/uploads/2020/08/1-1.jpg"
                                        : repo.language === "CSS"
                                        ? "https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8-320-80.jpg"
                                        : ""
                                }
                                description={repo.updated_at}
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default CardList;
