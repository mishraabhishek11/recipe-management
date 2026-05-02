"use client";

const ErrorPage = ({ error }: { error: { message: string } }) => {
  return (
    <main className="error">
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </main>
  );
};

export default ErrorPage;
