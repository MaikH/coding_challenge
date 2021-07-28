const fetchNotes = () =>
  fetch("http://localhost:3002/notes").then((res) => res.json());

const api = () => ({
  fetchNotes,
});

export default api;
