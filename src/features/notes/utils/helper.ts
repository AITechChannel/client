export const addIndex = (data: any[]) => {
  if (!data.length) return [];
  return data.map((item: any, index: number) => {
    return {
      ...item,
      no: index + 1
    };
  });
};
