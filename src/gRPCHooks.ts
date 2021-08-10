import { useCallback, useState } from 'react';
import { EmployeeServiceClient } from './schema/gen/client/EmployeeServiceClientPb';
import { Employee, ListRequest, ListResponse } from './schema/gen/client/employee_pb';


export const useEmployee = (client: EmployeeServiceClient) => {  
    const [employees, setEmployees] = useState<Employee[]>()

    const listEmployees = useCallback(async () => {
        try {
          const req = new ListRequest()
          const resp: ListResponse = await client.list(req, null)
          setEmployees(resp.getEmployeesList())
        } catch (e) {
          console.log(e)
        }
      }, [client])

    return {
        employees,
        listEmployees,
    }
}