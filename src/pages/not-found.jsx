import { Link } from "react-router";

const NotFoundPage = () => {
    return ( 
        <div style={styles.container}>
            <h1 style={styles.title}>
                404 - Page Not Found
            </h1>
            <p style={styles.message}>
                The page you are looking for does not exist.
            </p>
            <Link to="/" style={styles.link}>
                Go to Home
            </Link>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '80px 20px',
        color: '#fff',
    },
    title: {
        fontSize: '72px',
        marginBottom: '20px',
    },
    message: {
        fontSize: '18px',
        marginBottom: '30px',
    },
    link: {
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: '18px',
    },
}
 
export default NotFoundPage;