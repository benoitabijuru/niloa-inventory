import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

interface User {
  id: string;
}

// Remove the req parameter type since UploadThing handles this internally
const auth = () => {
  return { id: "fakeId" } as User;
};

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = auth(); // Ensure `auth` returns a valid user
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete:", metadata.userId, file.url);
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;


export type OurFileRouter = typeof ourFileRouter;