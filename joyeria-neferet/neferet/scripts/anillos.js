const muestrarioAnillos = document.querySelector(".muestrario-anillos");

const url = "https://beautycodez.github.io/wdd230/joyeria-neferet/neferet/data/data.json"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data.anillos);
      } else {
        console.log("not work")
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults (data){

        data.forEach((anillo) =>{
            const sectionElement = document.createElement("section");

                const h1Element = document.createElement("h1");
                const pictureElement = document.createElement("picture");
                    const imgElement = document.createElement("img");

            imgElement.setAttribute("src",anillo.img);
            imgElement.setAttribute("alt", "my ring");

            h1Element.innerHTML = `<strong>Anillo número ${anillo.numero}`


            pictureElement.appendChild(imgElement);
            sectionElement.appendChild(h1Element);
            sectionElement.appendChild(pictureElement);

            muestrarioAnillos.appendChild(sectionElement);
        })
        
}