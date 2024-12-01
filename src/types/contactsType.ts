export type Contacts = {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  email: string;
  picture: {
    medium: string;
    large: string;
    thumbnail: string;
  };
};
