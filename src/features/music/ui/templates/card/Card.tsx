import React, {FC} from "react";
import styles from "./Card.module.scss"

interface ICardProps {
  id: number
  link?: string
  artistName?: string
  title?: string
  picture: string
  font_size?: string
  pictureLink? : string
}

export const Card: FC<ICardProps> = ({id, link, artistName, title, picture, font_size}) => {
  return (
      <section className={styles.card} key={id}>
        {title || artistName ?
            <p style={{
              "fontSize": font_size
            }} className={styles.card_name}><a
                href={link}>{title || artistName}
            </a>
            </p> :
            ""}
        <a href={link}>
          <img src={picture} alt={artistName}/>
        </a>
      </section>
  )
};