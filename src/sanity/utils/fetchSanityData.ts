import sanityClient from "./sanityClient";

const fetchSanityData = async <T>(query: string): Promise<T> => {
  return sanityClient.fetch(query);
};

export default fetchSanityData;
