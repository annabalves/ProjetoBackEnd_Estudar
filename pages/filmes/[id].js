import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Detalhes({ filme }) {
  return (
    <Pagina titulo={filme.title}>
      <Row>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>

    </Pagina>
  )
}

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiFilmes.get('/movie/' + id)
  const filme = resultado.data

  return {
    props: { filme }, // will be passed to the page component as props
  }
}

export default Detalhes