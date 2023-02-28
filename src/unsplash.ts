import * as nodeFetch from "node-fetch";
import { createApi } from "unsplash-js";
import * as dotenv from "dotenv";
import { Random } from "unsplash-js/dist/methods/photos/types";

dotenv.config();
const UNSPLASH_ACCESS_KEY = process.env["UNSPLASH_ACCESS_KEY"] || "";

const unsplashApi = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
  fetch: nodeFetch.default as unknown as typeof fetch,
});

export const getRandomPhotos = async ({
  count = 10,
  query = "",
  orientation = "landscape",
  defaultDescription = "",
}) :Promise<Random[]>=> {
  const res = await unsplashApi.photos.getRandom({ count, query, orientation  });

  if (res?.errors?.length) {
    throw new Error("Unsplash Api Error(s)" + res.errors.join());
  }

  const results = res.response
  
  return Array.isArray(results) ? results.map((image) => ({
    description:
      image.description ?? image.alt_description ?? defaultDescription,
    url: image.urls.regular,
    ...image,
  })) : [results];
};
