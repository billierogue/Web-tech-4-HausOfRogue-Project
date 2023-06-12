var client = contentful.createClient({
    space: 'e8rxwk36sk2r',
    accessToken: 'G2TDHj6r4GmMR9QML0M_HVhXjIMLF64MZLJy-4B3Njg',
  });

  // console.log("Worked!");
//   console.log(client);

// get all items from contentful - call that data 'entries'
client.getEntries({content_type: 'projects'}).then(function (entries) {
    // log the title for all the entries that have it
    console.log(entries);
    // loop through each entry, call it 'entry'
    entries.items.forEach(function (entry) {
      var item = document.createElement("div");
      item.classList.add("item");

      var category = document.createElement("h2");
      category.innerHTML = entry.fields.category;
      // <h2>title</h2>
      item.append(category);

      var caption = document.createElement("p");
      caption.innerHTML = entry.fields.caption;
      item.append(caption);

      if (entry.fields.heroImage){
        var heroImage = document.createElement("img");
        heroImage.src = entry.fields.heroImage.fields.file.url;
        heroImage.classList.add("hero-image");
        item.append(heroImage);
      }

      var getDetails = document.createElement("a");
      getDetails.innerHTML = "Get Details";
      getDetails.href = "details.html?id="+entry.sys.id;
      item.append(getDetails);

      document.getElementById("place-for-content").append(item);
        // structure will always be entry.fields.nameoffield
      console.log("title: " + entry.fields.categor);
      console.log("Descr: " + entry.fields.description);

      console.log(entry.fields.heroImage.fields.file.url);
    });
  });

//   var myCar = {type: "Ferrari", 
//                 age: 5,
//                 features: ["power steering", "power windows", "power brakes"],
//             }
// myCar.type // "Ferrari"
// myCar.age // 5
// myCar.features // ["power steering", "power windows", "power brakes"]
// myCar.features.forEach(function(feature) {
//     feature // loops through each one
// });

// for (var i = 0; i < myCar.features.length; i++) {
//     myCar.features[i] // loops through each one
// }

