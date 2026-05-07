import { useBooks } from "../hooks/useBooks";

export default function HomePage() {
  const {data, isLoading, isError} = useBooks({})
  console.log(data);
  
  return(
    <div>
      Home
    </div>
  )
}