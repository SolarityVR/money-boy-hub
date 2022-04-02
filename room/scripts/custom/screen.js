const urlBase = "https://solarity.muhash.com/api";
const apiCaller = axios.create({
    baseURL: urlBase,
    headers: {
        "Content-Type": "application/json",
    },
});
//nft
var nft_containerEl = document.getElementById('screen');
var nft;
apiCaller
    .get("/daos/moneyboys")
    .then((data) => {
        nft = data.data.collection;
    })
    .catch((err) => {
        nft = { "floorPrice": "no data", "image": "assets/images/nft_placeholder.jpeg" };
    });
function build_nft() {

    var nft_item_amountEL = document.createElement('a-text');
    nft_containerEl.appendChild(nft_item_amountEL);
    nft_item_amountEL.setAttribute('value', nft.floorPrice);
    nft_item_amountEL.setAttribute('wrap-count', 15);
    nft_item_amountEL.setAttribute('baseline', "top");
    nft_item_amountEL.setAttribute('x-offset', 0.05);
    nft_item_amountEL.setAttribute("width", 0.9);
    nft_item_amountEL.setAttribute("align", "center");
    nft_item_amountEL.setAttribute('position', { x: 0.5, y: 0.1, z: 0.01 });
    nft_item_amountEL.setAttribute("color", "#AAEEFF");


    var nft_item_imageEL = document.createElement('a-image');
    nft_containerEl.appendChild(nft_item_imageEL);
    nft_item_imageEL.setAttribute('src', nft.image);
    nft_item_imageEL.setAttribute("width", 1.1);
    nft_item_imageEL.setAttribute("height", 1.1);
    nft_item_imageEL.setAttribute('position', { x: -0.4, y: 0, z: 0.01 });
    build_nft_listeners();
}

function build_nft_listeners() {

}

function start_screen() {
    build_nft();
}