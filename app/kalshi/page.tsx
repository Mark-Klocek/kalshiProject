import { kalshiData } from "@/lib/kalshi"



const Testing = async () => {
  const kalshiReturn = await kalshiData()

  
  return (
    <div>{kalshiReturn}</div>
  )
}

export default Testing