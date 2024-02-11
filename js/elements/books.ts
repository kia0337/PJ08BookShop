import BookLoader from "../elements/api/api";
import { bookListRender, getCategory } from "../elements/api/apiItem";
import Cart from "../elements/item/card";
import Sidebar from "./sidebar";

const bookIds: Array<string> = JSON.parse(
  window.localStorage.getItem("cart") ?? "[]"
);


const cart = new Cart(bookIds);


const bookList: HTMLElement = <HTMLElement>document.getElementById("bookList");


const sidebar: HTMLElement = <HTMLElement>document.getElementById("sidebar");


const initialCategory = getCategory(sidebar);


const loader = new BookLoader(initialCategory, 0, 6);

const loadBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("loadBtn")
);

loadBtn.addEventListener("click", () => {
  const startIndex: number = parseInt(
    loadBtn.dataset.startIndex ? loadBtn.dataset.startIndex : "0"
  );

  loader.setParams(getCategory(sidebar), startIndex, 6);
  loader.getBooks().then((data) => {
    bookListRender(data, bookList, cart);
    loadBtn.dataset.startIndex = (startIndex + 6).toString();
  });
});

loader.getBooks().then((data) => {
  bookListRender(data, bookList, cart);
  loadBtn.dataset.startIndex = "6";
});


const sidebarMenu = new Sidebar(loader, bookList, cart);
sidebarMenu.render();