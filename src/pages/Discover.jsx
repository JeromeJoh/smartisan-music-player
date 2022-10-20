import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title || 'Pop';

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-left text-gray-700">当前类目: {genreTitle}</h2>

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="text-gray-700 p-2 text-base outline-none sm:mt-0 mt-5 bg-transparent border-[1px] rounded border-gray-400 font-bold"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
