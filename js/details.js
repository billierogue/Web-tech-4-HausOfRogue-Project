
var textInURL = window.location.search; //
var parametersInURL = new URLSearchParams(textInURL); // 'id='
var id = parametersInURL.get('id'); // '1233455' random generated #

var client = contentful.createClient({
  space: 'e8rxwk36sk2r',
  accessToken: 'G2TDHj6r4GmMR9QML0M_HVhXjIMLF64MZLJy-4B3Njg',
});

client.getEntry(id).then(function (entry) {
  console.log(entry);
  var category = document.createElement ('h2');
  category.innerHTML = entry.fields.category;
  document.getElementById("place-for-content").append(category);
});


