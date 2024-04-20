
import { object, string, ref, array } from "yup";

export const RegisterValidator = object().shape({
  firstName: string()
    .trim()
    .required("First name is required.")
    .min(2, "First name must be at least 2 characters.")
    .max(30, "First name must be at most 30 characters."),
    lastName: string()
    .trim()
    .required("Last name is required.")
    .min(2, "Last name must be at least 2 characters.")
    .max(30, "Last name must be at most 30 characters."),
    username: string()
    .trim()
    .required("Username is required.")
    .min(4, "Username must be at least 4 characters.")
    .max(20, "Username must be at most 20 characters.")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
    email: string()
    .trim()
    .email("Invalid email format.")
    .required("Email is required.")
    .max(100, "Email must be at most 100 characters."),
  password: string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .max(30, "Password must be at most 30 characters.")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter."
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one number.")
    .matches(
      /^(?=.*[@$!%*?&])/,
      "Password must contain at least one special character."
    ),

    confirmPassword: string()
    .required("Confirm password is required.")
    .oneOf([ref("password")], "Passwords must match."),


    bio : string().nullable().max(500, "Bio must be at most 500 characters.")

});

export const LoginValidator = object().shape({
  email: string()
    .trim()
    .email("Invalid email format.")
    .required("Email is required.")
    .max(100, "Email must be at most 100 characters."),
  password: string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .max(30, "Password must be at most 30 characters.")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter."
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one number.")
    .matches(
      /^(?=.*[@$!%*?&])/,
      "Password must contain at least one special character."
    ),
});

export const UpdateUserValidator = object().shape({
  firstName: string()
    .trim()
    .required("First name is required.")
    .min(2, "First name must be at least 2 characters.")
    .max(30, "First name must be at most 30 characters."),
  lastName: string()
    .trim()
    .required("Last name is required.")
    .min(2, "Last name must be at least 2 characters.")
    .max(30, "Last name must be at most 30 characters."),
  username: string()
    .trim()
    .required("Username is required.")
    .min(4, "Username must be at least 4 characters.")
    .max(20, "Username must be at most 20 characters.")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
    bio : string().nullable().max(500, "Bio must be at most 500 characters.")

});


export const AddGenreValidator = object().shape({
  name: string()
    .trim()
    .required("Name is required.")
    .min(2, "Name must be at least 2 characters.")
    .max(30, "Name must be at most 30 characters."),
    description: string()
    .trim()
    .required("Description is required.")
    .min(20, "Description must be at least 20 characters.")
    .max(500, "Description must be at most 500 characters."),
});

export const AddSeriesValidator = object().shape({
  title: string()
    .trim()
    .required("Title is required.")
    .min(2, "Title must be at least 2 characters.")
    .max(30, "Title must be at most 30 characters."),
    description: string()
    .trim()
    .required("Description is required.")
    .min(20, "Description must be at least 20 characters.")
    .max(500, "Description must be at most 500 characters."),
});

export const AddBookValidator = object().shape({
  title: string()
    .trim()
    .required("Title is required.")
    .min(2, "Title must be at least 2 characters.")
    .max(30, "Title must be at most 30 characters."),
    description: string()
    .trim()
    .required("Description is required.")
    .min(20, "Description must be at least 20 characters.")
    .max(500, "Description must be at most 500 characters."),
    seriesId: string()
    .trim()
    .required("Series is required."),
    genreId: string()
    .trim()
    .required("Genre is required."),
    subGenreId: string()
    .trim()
    .required("Sub Genre is required."),
    type: string()
    .trim()
    .required("Type is required.")
    .oneOf(["NOVEL", "COMIC"], " Must be Novel or Comic."),



});
export const AddChapterValidator = object().shape({
  title: string()
    .trim()
    .required("Title is required.")
    .min(2, "Title must be at least 2 characters.")
    .max(30, "Title must be at most 30 characters."),
   content: object()
    .required("Content is required.")

});
export const AddComicChapterValidator = object().shape({
  title: string()
    .trim()
    .required("Title is required.")
    .min(2, "Title must be at least 2 characters.")
    .max(30, "Title must be at most 30 characters."),

    Images: array()
    .required("Images is required.")
    .min(1, "Images must be at least 1 image.")
    .max(40, "Images must be at most 20 images."),
    
});
// export { RegisterValidator, LoginValidator };


export const comment = object().shape({
  comment: string()
    .trim()
    .required("")
    .min(2, "Comment must be at least 2 characters.")
    .max(300, "Comment must be at most 300 characters."),
});