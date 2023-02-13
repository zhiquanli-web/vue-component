const directiveList: Array<{ name: string; directive: any }> = [];

const files = import.meta.glob('./modules/*.ts');
for (let key in files) {
  const file: any = await files[key]();
  directiveList.push(file.default);
}

export default directiveList;
