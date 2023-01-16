import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../queries/projectQueries";

const Projects = () => {
    const{loading,error, data}= useQuery(GET_PROJECTS);

    if(loading) return <Spinner />
    if (error) return <p>Error</p>

    return <>
            {data.projects.length > 0 ?
                (
                    <div className="row mt-4">
                        {data.projects.map(proj=>{
                            <ProjectCard key={proj.id} project={proj} />
                        })}
                    </div>
                )

            : (<p>No Projects</p>)}
        </>;
}

export default Projects