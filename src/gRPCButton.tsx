import { GRPCClients } from "./gRPCClients";
import { useEmployee } from "./gRPCHooks";

type Props = {
  clients: GRPCClients
} 

const GrpcButton: React.FC<Props> = ({clients}) => {
  const { employees, gender, position, listEmployees } = useEmployee(clients.employeeServiceClient)
  
    return (
      <>
        <button onClick={listEmployees}>
          Try gRPC
        </button>
        {employees.map(employee => {
          return (
          <div>
            従業員名: {employee.getLastname()} {employee.getFirstname()}
            性別: {gender(employee.getGender())} 
            役職: {position(employee.getPosition())} 
          </div>
          )
        })}
      </>
    );
  };
  
  export default GrpcButton;