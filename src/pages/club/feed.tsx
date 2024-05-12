import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Post } from "@/types";
import PostCard from "@/components/Club/PostCard";
import { post } from "@/schema/index.schema";

import { addPostUrl } from "@/Services/post/endpoint.post.services";
import GetAllPost from "@/Services/post/getAllPost.post.services";
import Loading from "../Loading";
import InternalError from "../error/InternalError";

import { getUserData } from "@/utils/authStorage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { subscribe } from "diagnostics_channel";

export default function Feed() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, loading, error } = GetAllPost();
  const [posts, setPosts] = useState<Post[]>([]);

  const user = getUserData();
  if (!user?.isSubscribed) {
    window.location.replace("/subscription");
  }
  const { handleSubmit, handleChange, handleBlur, values, resetForm } =
    useFormik({
      initialValues: {
        title: "",
        content: "",
      },
      validationSchema: post,
      onSubmit: async (values) => {
        try {
          setIsSubmitting(true);
          const response = await addPostUrl(values);
          toast.success("Post added successfully.");
          setPosts([response.data, ...posts]);
          resetForm();
        } catch (error) {
          console.error(error);
          toast.error("An error occurred. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
      },
    });

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return window.location.replace("/subscription");
  }

  return (
    <div className="flex justify-center bg-background text-text">
      <div className="w-[600px] space-y-6">
        <div className="flex justify-between px-4 pt-4">
          <h1 className="font-semibold underline decoration-blue-500 decoration-4 underline-offset-[11px] hover:bg-slate-300/10">
            Popular
          </h1>
          <h1 className="font-semibold hover:bg-slate-300/10">Following</h1>
        </div>
        <div className="rounded-md border p-4">
          <div className="items-cenater flex">
            <Avatar className="mr-2">
              <AvatarImage
                src={user?.avatar}
                alt="avatar"
                className="object-cover"
              />
              <AvatarFallback>{user?.username}</AvatarFallback>
            </Avatar>
            <form
              onSubmit={handleSubmit}
              className="flex-1 space-y-4 rounded-lg bg-background"
            >
              <div>
                <label htmlFor="title" className="sr-only">
                  Post Title
                </label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Title"
                  onBlur={handleBlur}
                  value={values.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="content" className="sr-only">
                  Post Content
                </label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="What's happening?!"
                  className="bg-tranparent min-h-12 resize-none "
                  onBlur={handleBlur}
                  value={values.content}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="sm"
                  className="gap-1.5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Posting..." : "Post"}
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="space-y-5 pb-10">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
