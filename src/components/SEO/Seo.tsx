import { Helmet } from "react-helmet";
interface SeoType {
  title: string;
}

export default function Seo({ title }: SeoType) {
  return (
    <Helmet>
      <title>{title} | Coding Garden</title>
    </Helmet>
  );
}
