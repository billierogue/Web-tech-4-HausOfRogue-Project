
var textInURL = window.location.search; //
var parametersInURL = new URLSearchParams(textInURL); // 'id='
var id = parametersInURL.get('id'); // '1233455' random generated #

var client = contentful.createClient({
  space: 'e8rxwk36sk2r',
  accessToken: 'G2TDHj6r4GmMR9QML0M_HVhXjIMLF64MZLJy-4B3Njg',
});

client.getEntry(id).then(function (entry) {
  var item = document.createElement("div")
  var category = document.createElement ('h1');
  category.innerHTML = entry.fields.category;
  item.append(category)
  var heroImage = document.createElement("img")
  heroImage.classList.add("hero-image-details")
  heroImage.src = "https:" + entry.fields.heroImage.fields.file.url
  item.append(heroImage)
  var paragraph1 = document.createElement("p");
  paragraph1.innerHTML = entry.fields.longDescription;
  item.append(paragraph1)

    if (entry.fields.gallery){ 
      entry.fields.gallery.forEach(function (entry) {
        var imageContainer = document.createElement("div");
        imageContainer.classList.add("gallery-item");
      var heroImage = document.createElement("img");
      heroImage.src = "https:" + entry.fields.file.url;
      heroImage.classList.add("hero-image");
      imageContainer.append(heroImage);
      document.getElementById("details-grid").append(imageContainer)
    })}
  document.getElementById("place-for-details").append(item);
});


