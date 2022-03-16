function txt() {
  let input = document.getElementsByClassName("int")[0].value;
  let btn = document.getElementsByClassName("btn")[0];
  let show = document.getElementsByClassName("show")[0];
  let everything = input.length;
  let spaces = input.split(" ").length - 1;
  let subs = everything - spaces;
  show.innerHTML = "length of text: " + subs;
  // Show Spaces
  let space = document.getElementsByClassName("showspace")[0];
  space.innerHTML = "length of text including spaces: " + everything;
  // only spaces
  let onlyspace = document.getElementsByClassName("onlyspace")[0];
  onlyspace.innerHTML = "No. of spaces: " + spaces;
}
