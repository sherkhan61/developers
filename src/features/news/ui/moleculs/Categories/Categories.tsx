import styles from './Categories.module.scss'
import React, {FC} from 'react'
import {getNews} from '@news/modules/news/actions'
import {DispatchType} from '@store/root-reducer'



interface ICategoriesProps {
    dispatch: DispatchType
}

export const Categories: FC<ICategoriesProps> = ({dispatch}) => {

    const onCategoryChoose = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLDivElement
        if (target.classList.contains(styles.categories_category)) {
            const category = `&categories=${target.dataset.cat}`
            dispatch(getNews({
                category
            }))
        }
    }

    return (
        <section onClick={onCategoryChoose}
                 className={styles.categories}>
            <div data-cat="general"
                 className={styles.categories_category + ' ' +
                 styles.all}>All
            </div>
            <div data-cat="business"
                 className={styles.categories_category + ' ' +
                 styles.business}>Business
            </div>
            <div data-cat="entertainment"
                 className={styles.categories_category + ' ' +
                 styles.entertaiment}>Entertainment
            </div>
            <div data-cat="science"
                 className={styles.categories_category + ' ' +
                 styles.science}>Science
            </div>
            <div data-cat="sports"
                 className={styles.categories_category + ' ' +
                 styles.sport}>Sports
            </div>
            <div data-cat="technology"
                 className={styles.categories_category + ' ' +
                 styles.technology}>Technology
            </div>
        </section>
    )
}