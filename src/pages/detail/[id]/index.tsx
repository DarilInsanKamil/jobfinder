import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  return (
    <div>
      <p>{router.query.id}</p>
    </div>
  );
};

export default DetailPage;
