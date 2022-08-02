import styles from './HelloWorld.module.css'

const HelloWorld = (props) => {
    return (
        <div className={styles.helloWorld}>
            Merhaba {props.name}
        </div>
    )
}

export default HelloWorld;