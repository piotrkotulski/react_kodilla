import styles from './List.module.scss';
const List = () => {
    return(
        <div className={styles.list}>
        <header className={styles.header}>
            <h2>Things to do<span>soon!</span></h2>
        </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                <article>
                    <h2 className="title">Books</h2>
                </article>
                <article>
                    <h2 className="title">Movies</h2>
                </article>
                <article>
                    <h2 className="title">Games</h2>
                </article>
            </section>
        </div>

    );
};

export default List;