export const list2tree = (list, parentId) => {
  let tempObj = {};
  list.forEach((item) => {
    item.children = [];
    tempObj[item.value] = item;
  });
  return list.filter((item) => {
    if (item.parentId && item.parentId !== parentId) {
      console.log(item.parentId);
      tempObj[item.parentId].children.push(item);
      return false;
    }
    return true;
  });
};
