import React from 'react'

interface Props {
    title: string
    content: string
    commentsQty: number 
    tags: string[]

    // 8 - enum
    category: Category;
}

export enum Category {
  JS = "JavaScript",
  TS = "Typescript",
  P = "Python",
}

const Destructuring = ({ title, content, commentsQty, tags, category }: Props) => {
  return (
    <div>
        <h2>{ title }</h2>
        <p>{ content }</p>
        <p>Quantify of comments { commentsQty }</p>
        <div>
            { tags.map( tag => (
                <span>#{ tag }</span>
            ))} 
        </div>
        <h4>Categoria: { category }</h4>
    </div>
  )
}

export default Destructuring