import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardDescription,
} from "@/components/ui/card";
import Stats from "@/Services/Dashboard/getStats.services";
import { ResponsivePie } from "@nivo/pie";
import { BiCategory } from "react-icons/bi";
import { GiBlackBook, GiBookshelf, GiEvilBook } from "react-icons/gi";

export default function Dashboard() {
  const { data, loading, error } = Stats();
  console.log(data, "data");
  console.log(loading, "loading");
  console.log(error, "error");

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col">
        <main className="flex flex-1 flex-col p-4 md:p-6">
          <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Novels</CardTitle>
                <GiBlackBook className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.novelCount}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400"></p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Users</CardTitle>
                <GiEvilBook className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.userCount}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400"></p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Genres</CardTitle>
                <BiCategory className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.genreCount}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400"></p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Series</CardTitle>
                <GiBookshelf className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.seriesCount}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400"></p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Donut Pie Chart</CardTitle>
                <CardDescription>
                  A fancy donut shaped pie chart showing total sign ups for the
                  last 6 months.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <DonutpieChart className="aspect-square w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pie Chart</CardTitle>
                <CardDescription>
                  A basic pie chart showing total sign ups for the last 6
                  months.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart className="aspect-square w-full" />
              </CardContent>
            </Card>
          </div>
          <div className="mt-4">
            <Card>
              <CardHeader className="pb-0">
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div>
                  <div className="border-t px-0 py-4 last:border-b">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Avatar"
                        className="aspect-square rounded-full object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                      <div className="grid gap-1 text-sm md:flex-1">
                        <div className="font-medium">Alice Johnson</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Commented on "The Mystery of the Lost City"
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        2 min ago
                      </div>
                    </div>
                  </div>
                  <div className="border-t px-0 py-4 last:border-b">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Avatar"
                        className="aspect-square rounded-full object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                      <div className="grid gap-1 text-sm md:flex-1">
                        <div className="font-medium">Bob Smith</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Liked "The Adventure of the Haunted House"
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        5 min ago
                      </div>
                    </div>
                  </div>
                  <div className="border-t px-0 py-4 last:border-b">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Avatar"
                        className="aspect-square rounded-full object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                      <div className="grid gap-1 text-sm md:flex-1">
                        <div className="font-medium">Ella Williams</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Started reading "The Secret of the Enchanted Forest"
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        10 min ago
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function DonutpieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={3}
        innerRadius={0.5}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.5}
        colors={["#e11d48"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
