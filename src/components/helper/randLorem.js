const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sint
ullam, velit et perferendis nostrum corporis illum in, culpa ipsa ex omnis
error minima unde nobis fuga? Sapiente, voluptatem labore animi earum est
modi aspernatur deleniti quasi harum sint rem.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sint
ullam, velit et perferendis nostrum corporis illum in, culpa ipsa ex omnis
error minima unde nobis fuga? Sapiente, voluptatem labore animi earum est
modi aspernatur deleniti quasi harum sint rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sint
ullam, velit et perferendis nostrum corporis illum in, culpa ipsa ex omnis
error minima unde nobis fuga? Sapiente, voluptatem labore animi earum est
modi aspernatur deleniti quasi harum sint rem.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sint
ullam, velit et perferendis nostrum corporis illum in, culpa ipsa ex omnis
error minima unde nobis fuga? Sapiente, voluptatem labore animi earum est
modi aspernatur deleniti quasi harum sint rem.`;

const randLorem = (min, max) => {
  const rand = Math.floor(Math.random() * (max - min) + min);
  const array = lorem.split(" ");
  const sliced = array.slice(min, rand);
  return sliced.join(" ");
};

export default randLorem;
