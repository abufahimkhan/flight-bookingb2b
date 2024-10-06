function searchFilter(items: any[], property: string, searchQuery: string) {
  return items.filter(
    (item) =>
      typeof item[property] === "string" &&
      item[property].toLowerCase().includes(searchQuery.toLowerCase()),
  );
}

export default searchFilter;
