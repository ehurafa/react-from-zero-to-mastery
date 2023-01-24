import styles from './EditPost.module.css'

import { useState, useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const EditPost = () => {

  const { id } = useParams()
  const { document: post } = useFetchDocument('posts', id)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('') 

  useEffect(() => {

    if(post) {
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)
    }

    const textTags = post.tagsArray && post.tagsArray.join(', ')

    setTags(textTags)

  }, [post])

  const { insertDocument, response } = useInsertDocument('posts')

  const navigate = useNavigate()

  const { user } = useAuthValue()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError('')

    // validate image URL
    try {
      new URL(image)
    } catch(error) {
      setFormError('A imagem precisa ser uma URL.')
    }

    // create tag array
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())

    // check all values
    if(!title || !image || !tags || !body) {
      setFormError('Por favor, preencha todos os campos!')
    }

    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    // redirect to home page
    
    navigate('/')

  }


  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editando o post: {post.title}</h2>
          <p>Altere os dados do post como desejar</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Titulo:</span>
              <input
                type="text"
                name="title"
                placeholder="Pense em um bom título..."
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              <span>URl da imagem:</span>
              <input
                type="text"
                name="image"
                placeholder="Insira uma imagem que representa o seu post"
                required
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </label>
            <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img src={post.image} className={styles.image_preview} alt={post.title} 
            />
            <label>
              <span>Conteúdo:</span>
              <textarea
                name="body"
                placeholder="Insira o conteúdo do post"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              ></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input
                type="text"
                name="tags"
                placeholder="Insira as tags, separadas por vírgula"
                required
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>
            {!response.loading && <button className="btn" onClick={handleSubmit}>Editar</button>}
            {response.loading && <button className="btn" disabled>Aguarde...</button>}
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  )

}

export default EditPost