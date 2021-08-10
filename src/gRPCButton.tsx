import { GRPCClients } from "./gRPCClients";
import { useEmployee } from "./gRPCHooks";

type Props = {
  clients: GRPCClients
} 

const GrpcButton: React.FC<Props> = ({clients}) => {
  const { employees, listEmployees } = useEmployee(clients.employeeServiceClient)
  
    return (
      <>
        <button onClick={listEmployees}>
          Try gRPC
        </button>
        {employees?.forEach(employee => {
          <div>
            {employee.getLastname()}
          </div>
        })}
      </>
    );
  };
  
  export default GrpcButton;