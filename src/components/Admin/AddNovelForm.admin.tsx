/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cBqU4x03ECP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AddNovelForm() {
  return (
    <Card key="1">
      <CardHeader>
        <div className="space-y-1.5">
          <h2 className="text-lg font-medium leading-6">Add Novel</h2>
          <p className="font-gray-500 text-sm leading-5">
            Fill out the form below to add a new novel to the system.
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Title" required />
            </div>
            <div className="flex space-x-12">
              <div className="space-y-2">
                <Label htmlFor="genre">Genre</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Genre</SelectLabel>
                      <SelectItem value="fantasy">Fantasy</SelectItem>
                      <SelectItem value="scienceFiction">
                        Science Fiction
                      </SelectItem>
                      <SelectItem value="mystery">Mystery</SelectItem>
                      <SelectItem value="romance">Romance</SelectItem>
                      <SelectItem value="horror">Horror</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="genre">Sub Genre</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sub Genre</SelectLabel>
                      <SelectItem value="fantasy">Fantasy</SelectItem>
                      <SelectItem value="scienceFiction">
                        Science Fiction
                      </SelectItem>
                      <SelectItem value="mystery">Mystery</SelectItem>
                      <SelectItem value="romance">Romance</SelectItem>
                      <SelectItem value="horror">Horror</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="series">Series</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Series" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Series</SelectLabel>
                      <SelectItem value="fantasy">Fantasy</SelectItem>
                      <SelectItem value="scienceFiction">
                        Science Fiction
                      </SelectItem>
                      <SelectItem value="mystery">Mystery</SelectItem>
                      <SelectItem value="romance">Romance</SelectItem>
                      <SelectItem value="horror">Horror</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                className="min-h-[100px]"
                id="description"
                placeholder="Description"
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex h-[300px] w-[200px] items-center justify-center rounded-md bg-gray-200">
              Image Preview
            </div>
            <Label
              className="flex w-fit flex-col gap-1.5"
              htmlFor="cover-picture"
            >
              <Label htmlFor="cover-picture">Cover Image</Label>
              <Input
                className="w-full"
                id="cover-picture"
                placeholder="File input"
                type="file"
              />
              <span className="text-sm font-normal leading-4 text-gray-500">
                Image should be at least 400x600 pixels.
              </span>
            </Label>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <Button className="w-full md:w-[200px]" variant="outline">
            Cancel
          </Button>
          <Button className="w-full md:w-[200px]">Save</Button>
        </div>
      </CardContent>
    </Card>
  );
}
