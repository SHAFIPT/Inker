export interface IUser {
  _id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  status: "active" | "blocked";
  role: "user" | "moderator";
  bio: string;
  profilePicture?: string;
  socialLinks: { platform: string; url: string }[];
  resume?: string;
  dateOfBirth?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBlog {
  _id: string;
  authorId: string;
  authorName: string;
  authorProfilePicture: string;
  title: string;
  thumbnail: string;
  content: string;
  tags: string[];
  votes: number;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateBlogRequestDTO {
  title: string;
  thumbnail: string;
  content: string;
  authorName: string;
  authorId: string;
}
