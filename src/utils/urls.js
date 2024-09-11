import { domain } from "./domain";

const apiGeneral = {
  login: `${domain}/login`,
  signup: `${domain}/signup`,
  createPod: `${domain}/create`,

  chats: `${domain}/messages/chats/`,
  send: `${domain}/messages/send`,

  taskSubmission: `${domain}/tasks/upload-files`,
  submissions: `${domain}/tasks/get-files`,
  files: `${domain}/files/`,
};

export { apiGeneral };
