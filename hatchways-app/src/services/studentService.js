import http from "./httpService";

const apiEndpoint = "https://www.hatchways.io/api/assessment/students";
export function getStudents() {
  return http.get(apiEndpoint);
}
