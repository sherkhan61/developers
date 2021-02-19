import React, {FC} from "react";
import classes from "./Article.module.scss"
import mockImg from "../../assets/categories/news.jpg"
import {IArticle} from '../../../../../api/newsApi'



export const Article: FC<IArticle> =
    ({title, urlToImage, description, content, author, url, source, publishedAt}) => {

      return <article className={classes.news_article}
          style={{backgroundImage: `url(${urlToImage || mockImg})`}}
          key={url}>
        <a href={url}>
          <h3 className={classes.news_article_title}>{title}</h3>
          <p
              className={classes.news_article_description}>{description}</p>
          <p className={classes.news_article_content}>{content}</p>
        </a>
        <p className={classes.news_article_author}>{author}</p>
        <p
            className={classes.news_article_src}>{source.name}</p>

      </article>
    };
