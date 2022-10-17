const pets = [ //this is an array, it can hold primitive data types 
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://cdn2.picryl.com/photo/2007/06/01/anchiceratops-dinosaur-a72266-1024.png",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://www.publicdomainpictures.net/pictures/320000/nahled/compsognathus-dinosaur-15762288458Ie.jpg",
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://live.staticflickr.com/4067/4313286378_ecfb924c5b_b.jpg",
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg", 
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "https://live.staticflickr.com/2793/4195574460_6c44988fc3_b.jpg", 
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxn_OwAWv1doorkddpqusz-QfYcmfRN9sWw&usqp=CAU",
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://www.publicdomainpictures.net/pictures/110000/nahled/yellow-cat-napping-by-cat-pillows.jpg",
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://live.staticflickr.com/5669/20128517854_7c0fbbe59e_b.jpg",
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://live.staticflickr.com/3263/2761864144_1bde095634_b.jpg", 
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://live.staticflickr.com/8605/16060509101_a71c83205a_b.jpg",
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://live.staticflickr.com/2848/12694499335_47b0240edd_b.jpg",
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://live.staticflickr.com/3095/3127236247_3da3f5667b_b.jpg",
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/sk10304-image-kwynvdv6.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e41dbc0da2e911c3797c54e4afadeff4",
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg", 
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn't get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://live.staticflickr.com/6111/6284891324_e9908cfca0_b.jpg", 
    }
  ];

  const rootDiv = document.getElementById("root");

  for (let i = 0; i < pets.length; i++) {   
    const pet = pets[i];
    const cardString = `
        <div class="card text-center">
          <div class="card-header">
            ${pet.name}
          </div>
          <img src="${pet.imageUrl}" class="card-img-top" alt="a picture of a(n) ${pet.color} ${pet.type}">
          <div class="card-body">
            <h3>${pet.color}</h3>
            <p class="card-text">  ${pet.name} is a ${pet.color} ${pet.type}.
            ${pet.name}'s special skill: ${pet.specialSkill}
            </p> 
          </div>
          <div class="card-footer text-bg-secondary">
          ${pet.type}
          </div>
        </div> 
`;
rootDiv.innerHTML+=cardString;
  }

  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

  const cardsOnDom = (array) => {
    let domString = "";
    for (const member of array) {
      domString += `
      <div class="card text-center">
        <div class="card-header">
          ${member.name}
        </div>
        <img src="${member.imageUrl}" class="card-img-top" alt="a picture of a(n) ${member.color} ${member.type}">
        <div class="card-body">
          <h3>${member.color}</h3>
          <p class="card-text">  ${member.name} is a ${member.color} ${member.type}.
          ${member.name}'s special skill: ${member.specialSkill}
          </p> 
        </div>
        <div class="card-footer text-bg-secondary">
          ${member.type}
        </div>
      </div> `;
    }
    renderToDom("#root", domString);
  }

const filter = (array, typeString) => {
    const typeArray = [];

    for (const member of array) {
      if (member.type === typeString) {
        typeArray.push(member);
      }
    }; 
    return typeArray;
  }

const showAllCats = document.querySelector("#catsonly");
const showAllDogs = document.querySelector("#dogsonly");
const showAllDinos = document.querySelector("#dinosonly");
const showAllButton = document.querySelector("#allpets");

showAllCats.addEventListener('click', () => {
  const allCats = filter(pets, 'cat');
  cardsOnDom(allCats);
});

showAllDogs.addEventListener('click', () => {
  const allDogs = filter(pets, 'dog');
  cardsOnDom(allDogs);
});

showAllDinos.addEventListener('click', () => {
  const allDinos = filter(pets, 'dino');
  cardsOnDom(allDinos);
});

showAllButton.addEventListener('click', () => {
  cardsOnDom(pets);
});
