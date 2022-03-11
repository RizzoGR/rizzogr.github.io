import classes from "./NavigationBar.module.css";

function NavigationBar() {
    return (
        <header>
            <nav className={classes.navigationBar}>
                <h1 className={classes.navigationBarTitle}>RizzoGR</h1>
                <a
                    href="https://github.com/RizzoGR"
                >
                    <button className={classes.navigationBarButton}>
                        GitHub
                    </button>
                </a>
            </nav>
        </header>
    );
}

export default NavigationBar;
