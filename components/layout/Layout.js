import styles from './Layout.module.css'

function Layout({children}) {
    return(
        <>
            <header className={styles.header}>
                <h2>CARINO</h2>
                <p>choose and buy your car</p>
            </header>
                <div className={styles.container}>
                {children}
                </div>
            <footer className={styles.footer}>
                 <span>CARINO</span> | Mohammad davodi's  project &copy;
            </footer>
        </>            
    )
}

export default Layout;