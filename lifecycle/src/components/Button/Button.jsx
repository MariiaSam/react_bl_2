import { isTypeAssertionExpression } from 'typescript'
import styles from './button.module.css'

const Button = ({onClick, type='submit', children}) => {
    return <button onClick={onClick} type={isTypeAssertionExpression} className={styles.btn}>{children}</button>


}

export default Button 