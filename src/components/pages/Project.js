import { useEffect, useState } from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project() {
    const {id} = useParams()

    const [project, setProject] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp)=> resp.json())
          .then((data)=> {
            setProject(data)
          })
          .catch(err => console.log)
    },[id])
    
    return(
        <>
            {project.name ? (
                <div>
                    <Container customClass='colum'>
                        <div>
                            <h1>
                                Projeto: {project.name}
                            </h1>
                            <button>
                                Editar Projeto
                            </button>
                        </div>
                    </Container>
                </div>
                ): (
                <Loading />
            )}
        </>
        )

}

export default Project