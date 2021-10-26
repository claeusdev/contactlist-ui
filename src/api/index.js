import Axios from "axios";

export const BASE_URL = `http://localhost:3000/api/v1/contacts`;

const Api = () => {
  return {
    create: async (values) => {
      const response = await Axios.post(BASE_URL, {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: values.phoneNumber,
      });

      return response;
    },
    update: (values) => {
      return Axios.put(`${BASE_URL}/${values.id}`, {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: values.phoneNumber,
      });
    },
    delete: (id) => {
      return Axios.delete(`${BASE_URL}/${id}`);
    },
    getAll: () => {
      return Axios.get(BASE_URL);
    },
    getContact: async (id) => {
      const response = await Axios.get(`${BASE_URL}/${id}`);
      const { data, included } = response.data;
      return { data, included};
    },
  };
};

export default Api;
