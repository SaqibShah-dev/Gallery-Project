import React from 'react';
import axios from "axios";
import Card from '../Card';
import { useState,useEffect } from 'react';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(1);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=20`
      );
      setData(response.data);
      setError(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);
  return (
    <div>
      {loading ? (
        <h3 className="mt-10 text-center text-lg text-gray-600">
          Loading ...........
        </h3>
      ) : error ? (
        /* Error State */
        <h3 className="mt-10 text-center text-red-500 text-lg">
          Failed to load data. Try again.
        </h3>
      ) : data.length === 0 ? (
        /* Empty State */
        <h3 className="mt-10 text-center text-gray-500 text-lg">
          No data available.
        </h3>
      ) : (
        /* Data Display */
        <div className="flex flex-wrap gap-5 justify-center mt-10">
          {data.map((elem, idx) => (
            <a
              key={idx}
              href={elem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card elem={elem} />
            </a>
          ))}
        </div>
      )}

      {/* Pagination Buttons */}
      <div className="flex gap-5 mt-10 justify-center items-center">
        <button
          className="text-center text-lg bg-amber-400 hover:bg-amber-500 font-bold text-white px-5 py-2 rounded-md disabled:opacity-50 transition"
          disabled={index === 1}
          onClick={() => setIndex(index - 1)}
        >
          Previous
        </button>
        <span className="text-lg font-semibold text-gray-600">{index}</span>
        <button
          className="text-center text-lg bg-amber-400 hover:bg-amber-500 font-bold text-white px-5 py-2 rounded-md transition"
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Gallery;
