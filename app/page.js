import client from "./lib/contentfulClient"
const clientFunc = async ()=>{
  let response = await client.getEntries({content_type:"myNom"})
  // console.log(response)
  /* We was getting it items: [ { metadata: [Object], sys: [Object], fields: [Object] } ] so we applied  [0].field */
  // console.log(response.items[0].fields)
      const newResp = response.items.map((item)=>{
return {
  titile:item.fields.titile,
  discussion:item.fields.descussion
}

      })
      return newResp
}
export default async function  Home() {
  const services = await clientFunc()
  console.log(services)

  return (
    <>
    {services.map((serv)=>{
      return (
<>
<h1>{serv.titile}</h1>
<p>{serv.discussion}</p>
</>
    )
    })}
    </>
  )
}
