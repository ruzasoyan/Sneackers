import { SearchIcon } from 'lucide-react'
import React from 'react'
import styles from "./style.module.css"

// export const Search = ({ search, setSearch }) => {
//     return (
//         <label className={styles.label}><SearchIcon size={20} />
//             <input value={search} onChange={(e) => {
//                 setSearch(e.target.value)
//             }} className={styles.input} type="text"  placeholder="Search..." />  </label>
//     )
// }


export const Search = ({ search, setSearch }) => {
    return (
        <label className={styles.searchWrapper}>
            <SearchIcon className={styles.icon} size={16} />
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.input}
                type="text"
                placeholder="Search..."
            />
        </label>
    );
};
