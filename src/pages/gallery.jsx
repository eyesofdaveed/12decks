import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

import { client } from "../sanity/client";

const builder = imageUrlBuilder(client);
const POSTS_QUERY = `*[_type == "projects"]{ _id, title, image, description }`;
const options = { next: { revalidate: 30 } };

function urlFor(source) {
  return builder.image(source);
}

const Gallery = ({ projects }) => {
  console.log(projects);
  return (
    <Layouts>
      <PageBanner
        pageTitle={"Our Projects"}
        pageDesc={"our values and vaulted us to the top of our industry."}
      />

      {/* Our Project One Start */}
      <section className="gap project-style-one addition">
        <div className="container">
          <div className="row project-slider">
            {projects.map((item, key) => (
              <div key={`projects-item-${key}`} className="col-lg-6">
                <div className="project-post">
                  <figure>
                    <img
                      className="w-100"
                      src={urlFor(item.image)}
                      alt={item.title}
                    />
                  </figure>
                  <div className="project-data">
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Project One End */}
    </Layouts>
  );
};
export default Gallery;

export async function getStaticProps() {
  const projects = await client.fetch(POSTS_QUERY, {}, options);

  return {
    props: {
      projects,
    },
  };
}
