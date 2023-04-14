import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import apiFilmes from '@/services/apiFilmes'
import React, { useEffect, useState } from 'react'

const index = (props) => {
    return (
        <Pagina titulo="Filmes">
            {props.filmes.map(item => (
                <p>{item.title}</p>
            ))}
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/movie/popular')
    const filmes = resultado.data.results

    return {
        props: { filmes },
    }
}