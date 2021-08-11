import { EmployeeServiceClient } from "./schema/gen/client/EmployeeServiceClientPb";

export type GRPCClients = {
    employeeServiceClient: EmployeeServiceClient;
};

export const gRPCClients: GRPCClients = {
    employeeServiceClient: new EmployeeServiceClient(`http://localhost:8080`)
};