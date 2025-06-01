let items = [
  { name: "Oats Digestive Biscuits", quantity: "", selected: false },
  { name: "Gol Maal 50-50", quantity: "", selected: false },
  { name: "Jim Jam", quantity: "", selected: false },
  { name: "Hide n Seek", quantity: "", selected: false },
  { name: "Good  Day", quantity: "", selected: false },
  { name: "Chocofills", quantity: "", selected: false },

  { name: "Milk Powder", quantity: "", selected: false },
  { name: "Honey  ", quantity: "1Ltr", selected: false },
  { name: "Green tea", quantity: "", selected: false },
  { name: "Red label tea", quantity: "250gm", selected: false },
  { name: "Coffee", quantity: "", selected: false },

  { name: "Cupcakes ", quantity: "", selected: false },
  { name: "Lotte Choco pie", quantity: "", selected: false },
  { name: "Khatta Mitta", quantity: "", selected: false },
  { name: "Panchratna Chiwda", quantity: "", selected: false },
  { name: "Pringles", quantity: "", selected: false },
  { name: "Chocolates/Protein bars", quantity: "1 box", selected: false },
  { name: "KinderJoy (HarryPotter set)", quantity: "", selected: false },

  { name: "Sattu Powder", quantity: "", selected: false },
  { name: "Badam Powder", quantity: "", selected: false },

  { name: "Cashews", quantity: "250 gm", selected: false },
  { name: "Raisins", quantity: "", selected: false },
  { name: "Almonds", quantity: "250 gm", selected: false },
  { name: "Pista", quantity: "250 gm", selected: false },
  { name: "Anjeer", quantity: "", selected: false },

  { name: "Cheese Cubes", quantity: "", selected: false },
  { name: "Cheese Slices", quantity: "1 small pack", selected: false },
  { name: "Paneer", quantity: "500 gm", selected: false },
  { name: "Plain yogurt", quantity: "", selected: false },
  { name: "Flavoured Yougurt ", quantity: "all flovours", selected: false },

  { name: "Peanuts", quantity: "2kg", selected: false },

  { name: "Rawa", quantity: "", selected: false },
  { name: "Chiroti Rawa", quantity: "1kg", selected: false },
  { name: "Bombay Rawa", quantity: "1kg", selected: false },
  { name: "Bancy Rawa", quantity: "1Kg", selected: false },
  { name: "Loose Atta", quantity: "", selected: false },
  { name: "Maida", quantity: "1kg", selected: false },

  { name: "Chole", quantity: "500 gm", selected: false },
  { name: "Rajma", quantity: "500 gm", selected: false },
  { name: "Bengal Gram", quantity: "500 gm", selected: false },
  { name: "Toordal", quantity: "1KG", selected: false },
  { name: "Udid Dal", quantity: "1KG", selected: false },
  { name: "Moong Dal", quantity: "1KG", selected: false },

  { name: "Rice", quantity: "", selected: false },
  { name: "Basmati", quantity: "2 kg", selected: false },

  { name: "Sugar", quantity: "", selected: false },
  { name: "Brown Sugar", quantity: "1 kg", selected: false },
  { name: "Jaggery Powder", quantity: "500 gm", selected: false },

  { name: "Dhana", quantity: "", selected: false },
  { name: "Jeera", quantity: "200 gm", selected: false },
  { name: "Tez pattha", quantity: "200 gm", selected: false },

  { name: "Masalas", quantity: "", selected: false },
  { name: "MTR Puliyogare", quantity: "", selected: false },

  { name: "MTR Semiyaa", quantity: "1 kg", selected: false },
  { name: "MTR Rawa Idli", quantity: "", selected: false },

  { name: "Dates", quantity: "500 gm", selected: false },

  { name: "Mango Pickle", quantity: "", selected: false },
  { name: "Garlic Pickle", quantity: "", selected: false },
  { name: "Ginger Pickle", quantity: "", selected: false },

  { name: "Whole Wheat Noodles", quantity: "", selected: false },
  { name: "Spagetti", quantity: "", selected: false },
  { name: "Penne Pasta", quantity: "", selected: false },
  { name: "Korean Noodles", quantity: "4 packs", selected: false },

  { name: "Soya Sauce", quantity: "500ML", selected: false },
  { name: "Tomato Sauce", quantity: "", selected: false },

  { name: "White Vinegar", quantity: "500ML", selected: false },
  { name: "Apple Cider Vinegar", quantity: "", selected: false },

  { name: "Knor Soup", quantity: "", selected: false },
  { name: "Kissan Jam", quantity: "", selected: false },
  { name: "White Mayoniese", quantity: "", selected: false },
  { name: "Tandoori Mayoniese", quantity: "", selected: false },
  { name: "Nutella", quantity: "", selected: false },

  { name: "Ashirvad Multigrain", quantity: "10kg", selected: false },
  { name: "Ashirvad Sharbati wheat", quantity: "2 kg", selected: false },

  { name: "Fortune Ricebran", quantity: "2Ltr", selected: false },
  { name: "Gold winner", quantity: "2Ltr", selected: false },
  { name: "Deepam Oil ", quantity: "1Ltr", selected: false },

  { name: "Ponds moisturizer", quantity: "", selected: false },
  { name: "Body Lotion", quantity: "", selected: false },
  { name: "Whitetone talcum powder", quantity: "", selected: false },
  { name: "Boroplus", quantity: "", selected: false },
  { name: "Candid dusting powder", quantity: "", selected: false },
  { name: "Vatika Shampoo", quantity: "", selected: false },
  { name: "Pantene Shampoo/Conditioner", quantity: "", selected: false },
  { name: "Wet Tissues", quantity: "1pack", selected: false },

  { name: "Dettol Handwash", quantity: "", selected: false },
  { name: "Vim Liquid", quantity: "2l", selected: false },
  { name: "ToothPaste", quantity: "", selected: false },
  { name: "Ultrasoft ToothBrush", quantity: "", selected: false },
  { name: "Pocket Tissues", quantity: "", selected: false },
  { name: "Colin", quantity: "", selected: false },
  { name: "Surf Excel Liquid", quantity: "1l", selected: false },
  { name: "Surf Excel Soap", quantity: "1l", selected: false },
  { name: "Drain Cleaner", quantity: "pack of 4", selected: false },
  { name: "Blue Harpic", quantity: "1l", selected: false },
  { name: "Red Harpic", quantity: "1l", selected: false },
  { name: "Lizol", quantity: "1l", selected: false },
  { name: "Pears soap", quantity: "pack of 4", selected: false },

  { name: "Neon highlighter", quantity: "", selected: false },
  { name: "Mechanical pencil", quantity: "", selected: false },
  { name: "Hauser Germany BallPoint Pens", quantity: "", selected: false },

  { name: "ENO", quantity: "", selected: false },
  { name: "Electral Powder", quantity: "pack of 5", selected: false },
  { name: "Lunch Box", quantity: "2", selected: false },
  { name: "Water Bottle", quantity: "1", selected: false },
  { name: "Pipe Glass", quantity: "1", selected: false },
  { name: "Feeding Bottle", quantity: "2", selected: false },
  { name: "Coffee Frother", quantity: "1", selected: false },
  { name: "Baking powder ", quantity: "1", selected: false },
  { name: "Baking Soda ", quantity: "1", selected: false },
  { name: "Fabric gum", quantity: "1", selected: false },
];
function renderItems() {
  const div = document.getElementById("list");
  div.innerHTML = "";
  items.forEach((item) => {
    const itemdiv = document.createElement("div");
    itemdiv.className = "grocery-item";

    const nameSpan = document.createElement("span");
    nameSpan.className = "item-name";
    nameSpan.textContent = item.name;

    const quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.className = "item-quantity";
    quantityInput.value = item.quantity;
    quantityInput.min = "1";

    const selectButton = document.createElement("button");
    selectButton.className = "select-item";
    selectButton.textContent = "+";

    itemdiv.appendChild(nameSpan);
    itemdiv.appendChild(quantityInput);
    itemdiv.appendChild(selectButton);

    div.appendChild(itemdiv);

    quantityInput.addEventListener("change", () => {
      item.quantity = quantityInput.value;
    });

    selectButton.addEventListener("click", () => {
      item.selected = !item.selected;
      selectButton.textContent = "-";
      itemdiv.classList.toggle("selected", item.selected);
    });
  });
}

renderItems();

function addItem() {
  const div = document.getElementById("list");
  const newItemDiv = document.createElement("div");
  newItemDiv.id = "new-item-input";
  newItemDiv.class = "grocery-item";
  const itemName = document.createElement("input");
  itemName.id = "new-item-name";
  itemName.type = "text";
  itemName.placeholder = "Enter Item Name";
  itemName.className = "item-name";
  const btn = document.createElement("button");
  btn.textContent = "Add";
  btn.className = "select-item";
  newItemDiv.appendChild(itemName);
  newItemDiv.appendChild(btn);
  div.appendChild(newItemDiv);
  itemName.focus();
  btn.addEventListener("click", () => {
    const name = itemName.value;
    if (name) {
      items.push({
        name: name,
        quantity: "",
        selected: false,
      });
      div.removeChild(newItemDiv);
      renderItems();
    }
  });
}

document.getElementById("newItem").addEventListener("click", addItem);

function exportToExcel() {
  const selectedItems = items.filter((item) => item.selected);

  if (selectedItems.length === 0) {
    alert("Please Select items to export");
    return;
  }

  const data = [
    ["Item", "Quantity"],
    ...selectedItems.map((item) => [item.name, item.quantity]),
  ];

  const workbook = XLSX.utils.book_new();
  const sheet = XLSX.utils.aoa_to_sheet(data);

  XLSX.utils.book_append_sheet(workbook, sheet, "Grocery List");

  XLSX.writeFile(workbook, "GroceryList.xlsx");
}

document.getElementById("export-btn").addEventListener("click", exportToExcel);
