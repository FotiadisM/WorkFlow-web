export type feedType = "post" | "share" | "comment" | "like";

export interface Feed {
  type: feedType;
  post_id: string;
  perpetrator_id: string;
}

export interface Post {
  id: string;
  user_id: string;
  text: string;
  images: string[];
  videos: string[];
  likes: string[];
  comments: string[];
  created: string;
}

export interface Comment {
  id: string;
  user_id: string;
  text: string;
  created: string;
  likes: string[];
}
