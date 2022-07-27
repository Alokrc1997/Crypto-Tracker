import styles from './Search.module.css';

type Props= {
    type: string,
    placeholder: string
    onChange: (e:any)=>void
}
const SearchBar: React.FC<Props> = ({type,placeholder,onChange}) => {
  return (
    <div className={styles.coin_search}>
        <input className={styles.coin_input} type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default SearchBar