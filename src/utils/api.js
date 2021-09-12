export const getYoutubeData = (videoCode) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoCode}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        resolve({ ...data });
      })
      .catch(() => reject(false));
  });
};
