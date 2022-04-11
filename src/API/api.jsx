async function fetchImages(img, page) {
  const API_KEY = `24786148-73e6975cfc3be9918a7435894`;
  const response = await fetch(
    `https://pixabay.com/api/?q=${img}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.ok) {
    return response.json();
  }
}

export default fetchImages;
