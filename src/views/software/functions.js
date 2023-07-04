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

export const getDataSingle = async (id) => {
  //fetch and await softwares json
  const response = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/software/" + id
  );
  const json = await response.json();
  //get only acf
  const map = json.map((item) => {
    return item.acf;
  });
  //then map to our format
  const software = Promise.all(
    map.map(async (item) => {
      return {
        Title: item.title,
        sectionText: item.description,
        carouselList: [
          await getMediaById(item.imageA),
          await getMediaById(item.imageB),
          await getMediaById(item.imageC),
        ],
        link: {
          text: item.download_button_text,
          url: item.download_link,
        },
        version: item.version,
        platforms: item.platforms,
      };
    })
  );

  //remove empty entries
  let resolve = await softwares;
  resolve.forEach((element) => {
    element.carouselList = element.carouselList.filter((item) => {
      if (item != "") {
        return item;
      }
    });
  });

  return resolve;
};
