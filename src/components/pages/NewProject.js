import { useNavigate } from 'react-router-dom'
import styles from '../pages/NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){

    const history = useNavigate()

    function createPost(project){
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },

            body: JSON.stringify(project),

        }).then((resp => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            history('/projects', { message: 'Projeto Criado com sucesso'})
        })

        ).catch(err => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>
                Criar projeto
            </h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>Formulário</p>
            <ProjectForm handleSubmit = {createPost} btnText='Criar Projeto'/>
        </div>
    )

}

export default NewProject