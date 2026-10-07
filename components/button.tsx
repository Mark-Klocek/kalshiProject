import Link from "next/link"

type ButtonProps = {
    text: string;
    route: string;
}


const Button = ({text,route}: ButtonProps) => {
  return (
    <Link   href={route}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
        {text}
    </Link>
    
  )
}

export default Button