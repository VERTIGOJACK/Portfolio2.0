const getMediaById = async (id) => {
  const response = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/media/" + id
  );
  const json = await response.json();
  if (id != "") {
    return {
      url: json.media_details.sizes.medium.source_url,
      title: json.title.rendered,
      text: json.caption.rendered.replace(/(<([^>]+)>)/gi, ""),
    };
  } else {
    return "";
  }
};

export const getData = async () => {
  //fetch and await softwares json
  const response = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/software"
  );
  const json = await response.json();
  //get only acf
  const map = json.map((item) => {
    return item.acf;
  });
  //then map to our format
  const softwares = Promise.all(
    map.map(async (item) => {
      return {
        sectionTitle: item.title,
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
