import { client } from "./lib/sanity";
import { Post } from "./lib/interface";
async function getData(){
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query)

  return data;
}

export default async function indexPage() {
  const data = await getData() as Post[];
  return <h1>hello santaz</h1>


}