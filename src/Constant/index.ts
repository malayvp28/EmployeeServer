import React from "react";
import { useHistory } from "react-router-dom";

const baseURL = "http://localhost:8080/";

export const newCustomerPath = "/admin/newCustomer";
export const statisticPath = "/admin/statistic";
export const allCustomerPath = "/admin/allCustomer";
export const loginPath = "/";
export const dealerPath = "/admin/dealer";
export const employeesPath = "/admin/employee";
export const franchisePath = "/admin/franchise";
export const customerPath = "/admin/customer";
export const queryPath = "/admin/query";
export const publicQueryPath = "/query";

export class URLS {
    Adminlogin = `${baseURL}employee/login`;

    customerData = `${baseURL}customer/all`;

    newCustomer = `${baseURL}customer/add`;

    employeeData = `${baseURL}employee/all`;

    saveEmployee = `${baseURL}employee/save`;

    deleteEmployee = `${baseURL}employee/delete`;

    addQuery = `${baseURL}query/add`;

    getQuery = `${baseURL}query/get`;

    updateQuery = `${baseURL}query/update/`;
}
export class Message {
    loginSuccessful = "You are Login Successfully";

    customerSaveSuccessful = "Customer added successfully.";
}
export class UserInfo {
    name = "employee_name";

    username = "employee_username";

    phoneNumber = "employee_phone_number";

    id = "employee_id";
}
