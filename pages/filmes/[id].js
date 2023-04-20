import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Detalhes({ filme, filme2 }) {
  return (
    <Pagina titulo={filme.title}>
      <Row>
        <Col md={3}>
          <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
        </Col>
        <Col md={9}>
          <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
          <p><strong>Orçamento: </strong>{filme.budget}</p>
          <p><strong>Duração: </strong>{filme.runtime}</p>
          <p><strong>Nota: </strong>{filme.vote_average}</p>
          <div>
            <ul>
              {filme.genres.map(item => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>
          <p><strong>Sinopse: </strong> {filme.overview}</p>

        </Col>
      </Row><br />
      <h2>Atores</h2>
      <Row md={6}>
        {filme2.map(item => (
          <img className='m-1' src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
        ))}
      </Row>

    </Pagina>
  )
}

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiFilmes.get('/movie/' + id + '?language=pt-BR')
  const filme = resultado.data

  const resultado2 = await apiFilmes.get('/movie/' + id + '/credits')
  const filme2 = resultado2.data.cast

  return {
    props: { filme, filme2 }, // will be passed to the page component as props
  }
}

export default Detalhes