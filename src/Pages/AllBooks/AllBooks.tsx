import { useQuery } from "@tanstack/react-query";
import CardItem from "./CardItem";
import { getAllData } from "../../api/api";

export default function AllBooks() {
  const getAllBooks = () => {
    return getAllData({
      url:"books",
    });
  };
  const { data, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  });
  if (isLoading) {
    return "Loading...";
  }
  console.log(data, "data is coming");
  return (
    <ul className="card-list">
      <CardItem />
    </ul>
  );
}
