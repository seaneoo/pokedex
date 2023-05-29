'use client';

type Props = {
  currentPage: number;
  minPage?: number;
  maxPage: number;
  showPageCount?: boolean;
  handleChange: (value: number) => void;
};

export default function Pagination({
  currentPage,
  minPage = 1,
  maxPage,
  showPageCount = true,
  handleChange
}: Props) {
  // Decrements the currentPage value if the new value will not be less than the min page value.
  const decrement = () => {
    if (currentPage > minPage) return currentPage - 1;
    return currentPage;
  };

  // Increments the currentPage value if the new value will not be more than the max page value.
  const increment = () => {
    if (currentPage < maxPage) return currentPage + 1;
    return currentPage;
  };

  const goTo = (page: 'first' | 'last') => {
    if (page === 'first') return (currentPage = minPage);
    else if (page === 'last') return (currentPage = maxPage);
    return (currentPage = 1);
  };

  return (
    <div className="inline-flex flex-col gap-2">
      {showPageCount && (
        <p className="text-center text-sm font-medium">
          {currentPage} of {maxPage}
        </p>
      )}
      <div className="inline-flex items-center justify-center gap-2">
        <button
          className="button"
          disabled={currentPage <= minPage}
          onClick={() => handleChange(goTo('first'))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="button"
          disabled={currentPage <= minPage}
          onClick={() => handleChange(decrement())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="button"
          disabled={currentPage >= maxPage}
          onClick={() => handleChange(increment())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="button"
          disabled={currentPage >= maxPage}
          onClick={() => handleChange(goTo('last'))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
