export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };
  /* taking a relative path passed to it and takes base url of a website and appends the path onto it  */