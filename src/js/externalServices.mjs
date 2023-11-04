const baseURL = import.meta.env.VITE_SERVER_URL;


function convertToJson(response)
{
    if(response.ok){
        return response.json();
    } else {
        throw new Error("Bad Response");
    }
}

export async function getProductsByCategory(category)
{
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  console.log(data.Result);
  return data.Result;
}

export async function findProductById(id)
{
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
}

export async function checkout(dataInput)
{
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataInput),
  };
  return await fetch(baseURL + "checkout/", opt).then(convertToJson);
}