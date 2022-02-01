import React, {FC} from "react";
import classes from "./Article.module.scss"
import mockImg from "../../assets/categories/news.jpg"
import {IArticle} from "@api/MediaStackApi";




export const Article: FC<IArticle> =
    ({title, image, description, author, url, source, published_at}) => {

      return <article className={classes.news_article}
          style={{backgroundImage: `url(${image || mockImg})`}}
          key={url}>
        <a href={url}>
          <h3 className={classes.news_article_title}>{title}</h3>
          <p
              className={classes.news_article_description}>{description}</p>
        </a>
        <p className={classes.news_article_author}>{author}</p>
        <p
            className={classes.news_article_src}>{source}</p>

      </article>
    };
