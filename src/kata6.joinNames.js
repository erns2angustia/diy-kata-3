const joinNames = (names) => {
  let nameString = "";
  const endString = names.length - 1;
  names.forEach((item, index) => {
    if (index === endString) {
      nameString += " & ";
    } else if (index > 0) {
      nameString += ", ";
    }
    nameString += item.name;
  });
  return nameString;
};

module.exports = joinNames;
