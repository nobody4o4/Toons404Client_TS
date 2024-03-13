import AllGenreDetails from "@/Services/Genre/getAllGenreServices";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { genreDetails } from "@/types";

// const invoices = [
//   {
//     invoice: "e0075208-70f4-4191-b632-c4df3d240151",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

export function TableDashboard(genre: genreDetails) {
  console.log(genre, "genre");
  const { data, loading, error } = AllGenreDetails();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  console.log(data);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Id</TableHead>
            <TableHead className="w-[100px]">Cover</TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="w-[400px]">Description</TableHead>
            <TableHead>Name</TableHead>

            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(data) &&
            data?.map((genres: genreDetails, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">
                  {genres.coverImage || "coverImage"}
                </TableCell>
                <TableCell>{genres.name}</TableCell>
                <TableCell>{genres.description}</TableCell>
                <TableCell>{genres.createdAt}</TableCell>
                <TableCell>{genres.updatedAt}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
