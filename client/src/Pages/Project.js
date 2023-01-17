import { GET_SINGLE_PROJECT } from "../queries/projectQueries";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { FaEnvelope, FaIdBadge, FaPhone } from "react-icons/fa";

const Project = () => {
  const {id}=useParams();

  const {loading, error, data} =useQuery(GET_SINGLE_PROJECT,{
    variables:{id}
  });

  if(loading) return <Spinner />
  if(error) return <p>Error</p>

  return (
    <div className="mx-auto w-75 card p-5">
      <Link to="/" className="btn btn-primary btn-sm w-25 d-inline ms-auto">Back</Link>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <h5 className="mt-3">Project Status</h5>
      <p className="lead">{data.project.status}</p>
      <div>
        <h5 className="mt-5">Client Information</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <FaIdBadge className="icon" />{data.project.client.name}
          </li>
          <li className="list-group-item">
            <FaEnvelope className="icon" />{data.project.client.email}
          </li>          
          <li className="list-group-item">
            <FaPhone className="icon" />{data.project.client.phone}
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Project