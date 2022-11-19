const addProductForm = document.getElementById("addProductForm");
const handleSubmit = async (e, form) => {
  e.preventDefault();
  const formData = new FormData(form);
  let obj = {};
  formData.forEach((value, key) => (obj[key] = value));
  console.log(obj);
  let headers = new Headers();
  headers.append("Accept", "application/json");
  //   headers.append("Content-Type", "application/json");
  console.log(formData.url);
  const response = await fetch("/addproduct", {
    method: "POST",
    headers,
    body: formData,
  });
};
addProductForm.addEventListener("submit", (e) =>
  handleSubmit(e, addProductForm)
);
