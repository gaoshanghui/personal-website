export const MailButton: React.FC = () => {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-gray-300 transition hover:bg-gray-100"
      aria-label="send email"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export const LinkedinButton: React.FC = () => {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-gray-300 transition hover:bg-gray-100"
      aria-label="To LinkedIn profile"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.05001 21H3.225V8.9625H7.05001V21ZM5.1375 7.275C3.9 7.275 3 6.375 3 5.1375C3 3.9 4.0125 3 5.1375 3C6.375 3 7.275 3.9 7.275 5.1375C7.275 6.375 6.375 7.275 5.1375 7.275ZM21 21H17.175V14.475C17.175 12.5625 16.3875 12 15.2625 12C14.1375 12 13.0125 12.9 13.0125 14.5875V21H9.1875V8.9625H12.7875V10.65C13.125 9.8625 14.475 8.625 16.3875 8.625C18.525 8.625 20.775 9.8625 20.775 13.575V21H21Z"
          fill="#2563EB"
        />
      </svg>
    </button>
  );
};
