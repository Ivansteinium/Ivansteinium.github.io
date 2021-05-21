const getAnime = async () => {
  const res = await fetch('https://anime-test.herokuapp.com/listanime');
  const anime = await res.json();
  return anime;
};

export const AnimeController = {
  anime: null,
  get: async (callType = 'cache') => {
    if (callType === 'cache' && AnimeController.callType) {
      return AnimeController.anime;
    }

    const anime = await getAnime();
    AnimeController.set(anime);
    return anime;
  },
  set: anime => {
    AnimeController.anime = anime;
  },
};
