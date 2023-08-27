import { createClient } from "next-sanity";

export const client = createClient({
  projectId: 'd1nio63s',
  dataset: 'production',
  apiVersion: '2023-08-27',
  useCdn: true
})