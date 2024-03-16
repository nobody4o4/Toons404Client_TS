import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const validationSchema = Yup.object().shape({
  comment: Yup.string()
    .min(10, "Comment must be at least 10 characters.")
    .max(160, "Comment must not be longer than 160 characters."),
});

function CommentForm() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Handle form submission success
    if (formData) {
      toast.success("Form submitted successfully!");
    }
  }, [formData]);

  return (
    <div className="mt-10">
      <Formik
        initialValues={{ comment: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setFormData(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleBlur }) => (
          <Form className="">
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Comment
              </label>
              <Field
                id="comment"
                name="comment"
                as={Textarea}
                placeholder="Tell us a little bit about yourself"
                className="resize-none"
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="text-red-500"
              />
              <div className="text-gray-500">
                You can <span>@mention</span> other users and organizations.
              </div>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CommentForm;
