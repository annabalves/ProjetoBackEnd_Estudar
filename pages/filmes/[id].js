import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ filme, atores}) => {
  return (
    <Pagina titulo={filme.title}>
      <Row>
        <Col md={3}>
          <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
        </Col>

        <Col md={9}>
          <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
          <p><strong>Orçamento: </strong>{filme.budget}</p>
          <p><strong>Duração: </strong>{filme.runtime} min</p>
          <p><strong>Nota: </strong>{filme.vote_average}</p>
          <div>
            <ul>
              {filme.genres.map(item => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>

      <h2>Atores</h2>
      <Row md={6}>
        {atores.map(item => (
          <Link href={'/atores/' + item.id}><img className='container m-1' src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} /></Link>
        ))}
      </Row>

    </Pagina>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiFilmes.get('/movie/' + id + '?language=pt-BR')
  const filme = resultado.data

  const resAtores = await apiFilmes.get('/movie/' + id + '/credits')
  const atores = resAtores.data.cast

  return {
    props: { filme, atores } // will be passed to the page component as props
  }
}

