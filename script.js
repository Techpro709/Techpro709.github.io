// AOS.init();
AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if(urlParams.has('name')){
  const name = urlParams.get('name')
  document.querySelector("body > main > section.pt-20.pb-48 > div > div:nth-child(2) > div:nth-child(3) > div > div > h5").innerText = name;
  if(urlParams.has('img')){
    const img = urlParams.get('img')
    document.querySelector("body > main > section.pt-20.pb-48 > div > div:nth-child(2) > div:nth-child(3) > div > img").src=img;
  }  
  if(urlParams.has('title')){
    const title = urlParams.get('title')
    document.querySelector("body > main > section.pt-20.pb-48 > div > div:nth-child(2) > div:nth-child(3) > div > div > p").innerText = title;
  } 
}
