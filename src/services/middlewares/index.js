export default function searchMiddleWare(res, query) {
  const { data } = res;
  return {
      query,
      results: data.results.map(item => ({
        name: item.name,
        id: item.id,
        image: `${item.thumbnail.path}.${item.thumbnail.extension}`
      })),
      total: data.total,
  }
}