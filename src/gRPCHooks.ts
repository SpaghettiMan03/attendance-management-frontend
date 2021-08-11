import { useCallback, useState } from 'react';
import { EmployeeServiceClient } from './schema/gen/client/EmployeeServiceClientPb';
import { Employee, ListRequest, ListResponse } from './schema/gen/client/employee_pb';


export const useEmployee = (client: EmployeeServiceClient) => {  
    const [employees, setEmployees] = useState<Employee[]>([])

    const listEmployees = useCallback(async () => {
        try {
          const req = new ListRequest()
          const resp: ListResponse = await client.list(req, null)
          setEmployees(resp.getEmployeesList())
        } catch (e) {
          console.log(e)
        }
      }, [client])

    const gender = (gender: Employee.Gender | undefined) => {
      switch (gender) {
          case 0: 
            return "男性"
          case 1: 
            return "女性"
          case 2: 
            return "どちらでもない"
          case 3: 
            return "回答なし"
          default:
            return undefined
      }
    }

    const position = (gender: Employee.Position | undefined) => {
        switch (gender) {
            case 0: 
              return "正社員"
            case 1: 
              return "パート/アルバイト"
            default:
              return undefined
        }
      }

    return {
        employees,
        gender,
        position,
        listEmployees,
    }
}