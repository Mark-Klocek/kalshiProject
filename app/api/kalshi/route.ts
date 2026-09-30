async function GET(){
  console.log('kalshi api hit')
  return Response.json({ok:true})
}

export { GET };