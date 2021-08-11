var firebaseConfig = {
    apiKey: "AIzaSyCbfS4QrEf2Cvqgb54utf36_bxrkD-ZaHE",
    authDomain: "pos-project-b0ae1.firebaseapp.com",
    databaseURL: "https://pos-project-b0ae1-default-rtdb.firebaseio.com/",
    projectId: "pos-project-b0ae1",
    storageBucket: "pos-project-b0ae1.appspot.com",
    messagingSenderId: "1057700203178",
    appId: "1:1057700203178:web:412c29b36707544bc01ed3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var Menu = [];
// Lấy dữ liệu từ fire base
function getListOfItemsData(){
    var data = firebase.database().ref('ListOfItems');
    data.once('value').then(function(snapshot){
        if (Menu.length === 0){console.log("Loading...")}
        Menu.push(snapshot.val());
        Menu = Menu[0];
        console.log("Menu is: ", Menu);
        render();
        renderListOfItemTable(Menu);
    });
}
getListOfItemsData();

function updateListOfItems(item){
    console.log(item)
    firebase.database().ref('ListOfItems/' + item.id)
    .set({
        id: item.id,
        name: item.name,
        shortName: item.shortName,
        size: item.size,
        quantity: item.quantity,
        image: item.image,
        type: item.type,
        price: item.price,
        discount: item.discount,
    });
}
// getListOfItemsData();