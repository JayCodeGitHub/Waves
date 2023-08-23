import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <title>Waves</title>
      <meta
        name="description"
        content="Website offers a music player that allows you to play your favorite songs in high sound quality. The site is fully responsive, which means you can listen to music on any device."
      />
    </Helmet>
  );
};

export default SEO;
