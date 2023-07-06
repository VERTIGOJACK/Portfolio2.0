const getMediaById = async (id) => {
  const response = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/media/" + id
  );
  const json = await response.json();
  if (id != "") {
    return {
      url: json.media_details.sizes.medium.source_url,
    };
  } else {
    return "";
  }
};

const getTech = async (technologyArray) => {
  const res = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/technology"
  );
  const json = await res.json();
  const clean = json.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  const filter = clean.filter((e) => technologyArray.includes(e.id));
  return filter;
};

export const getDataList = async () => {
  //fetch and await softwares json
  const response = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/software/"
  );
  const json = await response.json();
  //get only acf
  //then map to our format
  const software = Promise.all(
    json.map(async (item) => {
      const image = async () => {
        const imgres = await fetch(
          "https://content.vertigodigital.se/wp-json/wp/v2/media/" +
            item.featured_media
        );
        const imgjson = await imgres.json();
        console.log(imgjson.source_url);
        return imgjson.source_url;
      };

      return {
        title: item.acf.title,
        platforms: item.acf.platforms,
        id: item.id,
        image: await image(),
      };
    })
  );

  return software;
};

//needs taxonomy for tech used
export const getDataSingle = async (id) => {
  //fetch and await softwares json
  const response = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/software/" + id
  );
  const json = await response.json();
  //then map to our format
  const software = async () => {
    return {
      featuredImage: await getMediaById(json.featured_media),
      title: json.acf.title,
      description: json.acf.description,
      carouselList: [
        await getMediaById(json.acf.imageA),
        await getMediaById(json.acf.imageB),
        await getMediaById(json.acf.imageC),
      ],
      link: {
        text: json.acf.download_button_text,
        url: json.acf.download_link,
      },
      version: json.acf.version,
      platforms: json.acf.platforms,
      technologies: await getTech(json.technology),
    };
  };
  //remove empty entries
  let resolve = await software();
  resolve.carouselList = resolve.carouselList.filter((item) => {
    if (item != "") {
      return item;
    }
  });

  return resolve;
};
