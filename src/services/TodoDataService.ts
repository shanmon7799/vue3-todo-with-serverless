import http from "../http-common";

class TodoDataService {
  getAll(): Promise<any> {
    return http.get("/");
  }

  get(id: any): Promise<any> {
    return http.get(`/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/${id}`);
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`/todos?title=${title}`);
  }
}

export default new TodoDataService();
